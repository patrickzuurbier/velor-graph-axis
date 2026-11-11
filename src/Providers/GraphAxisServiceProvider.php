<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Providers;

use App\Services\Graphs\Contracts\GraphExampleRegistryInterface;
use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use App\Services\Graphs\Data\GraphExampleData;
use App\Services\Graphs\Data\GraphTypeData;
use Illuminate\Support\ServiceProvider;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

class GraphAxisServiceProvider extends ServiceProvider
{
    public function boot(
        GraphTypeRegistryInterface $graphTypes,
        GraphExampleRegistryInterface $graphExamples,
    ): void {
        $packagePath = dirname(__DIR__, 2);

        $this->loadTranslationsFrom($packagePath . '/lang', 'velor-graph-axis');

        $graphTypes->register(new GraphTypeData(
            key: LineGraphInterface::TYPE,
            version: 1,
            graphContract: LineGraphInterface::class,
            resultContract: LineGraphResultInterface::class,
            generatorStub: $packagePath . '/stubs/axis.line.stub',
        ));

        $graphExamples->register(new GraphExampleData(
            key: 'axis.rainfall-line',
            source: $packagePath . '/examples/RainfallLineGraph.php',
            target: 'RainfallLineGraph.php',
        ));
    }
}
