<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Integration;

use App\Services\Graphs\Contracts\GraphExampleRegistryInterface;
use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\Integration\AbstractIntegrationTestCase;
use Velor\GraphAxis\Contracts\BarGraphInterface;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;

class GraphAxisPackageTest extends AbstractIntegrationTestCase
{
    /**
     * @param string $key Registered graph type key.
     * @param class-string $graphContract Registered graph contract.
     * @param class-string $resultContract Registered result contract.
     * @param string $stub Package stub filename.
     */
    #[DataProvider('graphTypeProvider')]
    public function test_package_registers_an_axis_graph_type(
        string $key,
        string $graphContract,
        string $resultContract,
        string $stub,
    ): void {
        $graphTypes = $this->app->make(GraphTypeRegistryInterface::class);
        $type = $graphTypes->find($key);

        $this->assertNotNull($type);
        $this->assertSame(1, $type->version);
        $this->assertSame($graphContract, $type->graphContract);
        $this->assertSame($resultContract, $type->resultContract);
        $this->assertNotNull($type->generatorStub);
        $this->assertFileExists($type->generatorStub);
        $this->assertStringEndsWith('/stubs/' . $stub, $type->generatorStub);
    }

    #[DataProvider('exampleProvider')]
    public function test_package_registers_an_axis_example(string $key, string $source, string $target): void
    {
        $examples = $this->app->make(GraphExampleRegistryInterface::class);
        $example = $examples->find($key);

        $this->assertNotNull($example);
        $this->assertFileExists($example->source);
        $this->assertStringEndsWith('/examples/' . $source, $example->source);
        $this->assertSame($target, $example->target);
    }

    public function test_package_loads_the_example_translations(): void
    {
        $translator = $this->app->make(Translator::class);

        $translator->setLocale('en');
        $this->assertSame(
            'Rainfall comparison',
            $translator->get('velor-graph-axis::graphs.rainfall.title'),
        );
        $this->assertSame('Logarithmic', $translator->get('velor-graph-axis::graphs.scales.logarithmic'));
        $this->assertSame('Quarterly sales', $translator->get('velor-graph-axis::graphs.quarterly-sales.title'));
        $this->assertSame('Weekly visitors', $translator->get('velor-graph-axis::graphs.weekly-visitors.title'));

        $translator->setLocale('nl');
        $this->assertSame(
            'Neerslagvergelijking',
            $translator->get('velor-graph-axis::graphs.rainfall.title'),
        );
        $this->assertSame('Logaritmisch', $translator->get('velor-graph-axis::graphs.scales.logarithmic'));
        $this->assertSame('Kwartaalverkoop', $translator->get('velor-graph-axis::graphs.quarterly-sales.title'));
        $this->assertSame(
            'Wekelijkse bezoekers',
            $translator->get('velor-graph-axis::graphs.weekly-visitors.title'),
        );
    }

    /**
     * @return array<string, array{string, class-string, class-string, string}>
     */
    public static function graphTypeProvider(): array
    {
        return [
            'bar' => [
                BarGraphInterface::TYPE,
                BarGraphInterface::class,
                BarGraphResultInterface::class,
                'axis.bar.stub',
            ],
            'line' => [
                LineGraphInterface::TYPE,
                LineGraphInterface::class,
                LineGraphResultInterface::class,
                'axis.line.stub',
            ],
            'pictorial bar' => [
                PictorialBarGraphInterface::TYPE,
                PictorialBarGraphInterface::class,
                PictorialBarGraphResultInterface::class,
                'axis.pictorial-bar.stub',
            ],
        ];
    }

    /**
     * @return array<string, array{string, string, string}>
     */
    public static function exampleProvider(): array
    {
        return [
            'bar'           => ['axis.quarterly-sales-bar', 'QuarterlySalesBarGraph.php', 'QuarterlySalesBarGraph.php'],
            'line'          => ['axis.rainfall-line', 'RainfallLineGraph.php', 'RainfallLineGraph.php'],
            'pictorial bar' => [
                'axis.weekly-visitors-pictorial-bar',
                'WeeklyVisitorsPictorialBarGraph.php',
                'WeeklyVisitorsPictorialBarGraph.php',
            ],
        ];
    }
}
