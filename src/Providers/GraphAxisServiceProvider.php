<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Providers;

use App\Services\Graphs\Contracts\GraphExampleRegistryInterface;
use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use App\Services\Graphs\Data\GraphExampleData;
use App\Services\Graphs\Data\GraphTypeData;
use Illuminate\Support\ServiceProvider;
use Velor\GraphAxis\Contracts\BarGraphInterface;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;
use Velor\GraphAxis\Contracts\ScatterGraphInterface;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;

class GraphAxisServiceProvider extends ServiceProvider
{
    public function boot(
        GraphTypeRegistryInterface $graphTypes,
        GraphExampleRegistryInterface $graphExamples,
    ): void {
        $packagePath = dirname(__DIR__, 2);

        $this->loadTranslationsFrom($packagePath . '/lang', 'velor-graph-axis');

        $graphTypes->register(new GraphTypeData(
            key: BarGraphInterface::TYPE,
            version: 1,
            graphContract: BarGraphInterface::class,
            resultContract: BarGraphResultInterface::class,
            generatorStub: $packagePath . '/stubs/axis.bar.stub',
        ));
        $graphTypes->register(new GraphTypeData(
            key: LineGraphInterface::TYPE,
            version: 1,
            graphContract: LineGraphInterface::class,
            resultContract: LineGraphResultInterface::class,
            generatorStub: $packagePath . '/stubs/axis.line.stub',
        ));
        $graphTypes->register(new GraphTypeData(
            key: PictorialBarGraphInterface::TYPE,
            version: 1,
            graphContract: PictorialBarGraphInterface::class,
            resultContract: PictorialBarGraphResultInterface::class,
            generatorStub: $packagePath . '/stubs/axis.pictorial-bar.stub',
        ));
        $graphTypes->register(new GraphTypeData(
            key: ScatterGraphInterface::TYPE,
            version: 1,
            graphContract: ScatterGraphInterface::class,
            resultContract: ScatterGraphResultInterface::class,
            generatorStub: $packagePath . '/stubs/axis.scatter.stub',
        ));

        $graphExamples->register(new GraphExampleData(
            key: 'axis.quarterly-sales-bar',
            source: $packagePath . '/examples/QuarterlySalesBarGraph.php',
            target: 'QuarterlySalesBarGraph.php',
        ));
        $graphExamples->register(new GraphExampleData(
            key: 'axis.rainfall-line',
            source: $packagePath . '/examples/RainfallLineGraph.php',
            target: 'RainfallLineGraph.php',
        ));
        $graphExamples->register(new GraphExampleData(
            key: 'axis.weekly-visitors-pictorial-bar',
            source: $packagePath . '/examples/WeeklyVisitorsPictorialBarGraph.php',
            target: 'WeeklyVisitorsPictorialBarGraph.php',
        ));
        $graphExamples->register(new GraphExampleData(
            key: 'axis.marketing-reach-scatter',
            source: $packagePath . '/examples/MarketingReachScatterGraph.php',
            target: 'MarketingReachScatterGraph.php',
        ));
    }
}
