<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Integration;

use App\Services\Graphs\Contracts\GraphExampleRegistryInterface;
use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use Illuminate\Contracts\Translation\Translator;
use Tests\Integration\AbstractIntegrationTestCase;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

class GraphAxisPackageTest extends AbstractIntegrationTestCase
{
    public function test_package_registers_the_line_graph_type(): void
    {
        $graphTypes = $this->app->make(GraphTypeRegistryInterface::class);
        $line = $graphTypes->find(LineGraphInterface::TYPE);

        $this->assertNotNull($line);
        $this->assertSame(1, $line->version);
        $this->assertSame(LineGraphInterface::class, $line->graphContract);
        $this->assertSame(LineGraphResultInterface::class, $line->resultContract);
        $this->assertNotNull($line->generatorStub);
        $this->assertFileExists($line->generatorStub);
        $this->assertStringEndsWith('/stubs/axis.line.stub', $line->generatorStub);
    }

    public function test_package_registers_the_rainfall_line_example(): void
    {
        $examples = $this->app->make(GraphExampleRegistryInterface::class);
        $rainfall = $examples->find('axis.rainfall-line');

        $this->assertNotNull($rainfall);
        $this->assertFileExists($rainfall->source);
        $this->assertStringEndsWith('/examples/RainfallLineGraph.php', $rainfall->source);
        $this->assertSame('RainfallLineGraph.php', $rainfall->target);
    }

    public function test_package_loads_the_rainfall_translations(): void
    {
        $translator = $this->app->make(Translator::class);

        $translator->setLocale('en');
        $this->assertSame(
            'Rainfall comparison',
            $translator->get('velor-graph-axis::graphs.rainfall.title'),
        );
        $this->assertSame('Logarithmic', $translator->get('velor-graph-axis::graphs.scales.logarithmic'));

        $translator->setLocale('nl');
        $this->assertSame(
            'Neerslagvergelijking',
            $translator->get('velor-graph-axis::graphs.rainfall.title'),
        );
        $this->assertSame('Logaritmisch', $translator->get('velor-graph-axis::graphs.scales.logarithmic'));
    }
}
