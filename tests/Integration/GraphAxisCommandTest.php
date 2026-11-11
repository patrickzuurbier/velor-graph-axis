<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Integration;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Testing\PendingCommand;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\Integration\AbstractIntegrationTestCase;

class GraphAxisCommandTest extends AbstractIntegrationTestCase
{
    protected string $originalBasePath;

    protected string $temporaryBasePath;

    protected Filesystem $files;

    protected function setUp(): void
    {
        parent::setUp();

        $this->files = new Filesystem();
        $this->originalBasePath = $this->app->basePath();
        $this->temporaryBasePath = sys_get_temp_dir() . '/velor-graph-axis-command-' . bin2hex(random_bytes(8));

        $this->files->ensureDirectoryExists($this->temporaryBasePath);
        $this->app->setBasePath($this->temporaryBasePath);
    }

    protected function tearDown(): void
    {
        $this->app->setBasePath($this->originalBasePath);
        $this->files->deleteDirectory($this->temporaryBasePath);

        parent::tearDown();
    }

    #[DataProvider('graphTypeProvider')]
    public function test_it_generates_an_application_axis_graph(
        string $name,
        string $type,
        string $baseClass,
        string $key,
        string $title,
    ): void {
        $command = $this->artisan('velor:make:graph', [
            'name'   => $name,
            '--type' => $type,
        ]);

        $this->assertInstanceOf(PendingCommand::class, $command);
        $command->assertExitCode(Command::SUCCESS)->run();

        $class = str_ends_with($name, 'Graph') ? $name : $name . 'Graph';
        $path = $this->temporaryBasePath . '/app/Graphs/' . $class . '.php';

        $this->assertTrue($this->files->exists($path));

        $content = $this->files->get($path);

        $this->assertStringContainsString("class {$class} extends {$baseClass}", $content);
        $this->assertStringContainsString("return '{$key}';", $content);
        $this->assertStringContainsString("return '{$title}';", $content);
        $this->assertNotEmpty(token_get_all($content, TOKEN_PARSE));
    }

    #[DataProvider('exampleProvider')]
    public function test_it_publishes_and_removes_an_axis_example(string $example, string $filename): void
    {
        $publish = $this->artisan('velor:graph:example:publish', [
            'example' => $example,
        ]);

        $this->assertInstanceOf(PendingCommand::class, $publish);
        $publish->assertExitCode(Command::SUCCESS)->run();

        $path = $this->temporaryBasePath . '/app/Graphs/' . $filename;

        $this->assertTrue($this->files->exists($path));
        $this->assertNotEmpty(token_get_all($this->files->get($path), TOKEN_PARSE));

        $remove = $this->artisan('velor:graph:example:remove', [
            'example' => $example,
        ]);

        $this->assertInstanceOf(PendingCommand::class, $remove);
        $remove->assertExitCode(Command::SUCCESS)->run();

        $this->assertFalse($this->files->exists($path));
    }

    /**
     * @return array<string, array{string, string}>
     */
    public static function exampleProvider(): array
    {
        return [
            'line'          => ['axis.rainfall-line', 'RainfallLineGraph.php'],
            'bar'           => ['axis.quarterly-sales-bar', 'QuarterlySalesBarGraph.php'],
            'pictorial bar' => [
                'axis.weekly-visitors-pictorial-bar',
                'WeeklyVisitorsPictorialBarGraph.php',
            ],
            'scatter' => ['axis.marketing-reach-scatter', 'MarketingReachScatterGraph.php'],
        ];
    }

    /**
     * @return array<string, array{string, string, string, string, string}>
     */
    public static function graphTypeProvider(): array
    {
        return [
            'line'          => ['MonthlySales', 'axis.line', 'AbstractLineGraph', 'monthly-sales', 'Monthly Sales'],
            'bar'           => ['QuarterlySales', 'axis.bar', 'AbstractBarGraph', 'quarterly-sales', 'Quarterly Sales'],
            'pictorial bar' => [
                'WeeklyVisitors',
                'axis.pictorial-bar',
                'AbstractPictorialBarGraph',
                'weekly-visitors',
                'Weekly Visitors',
            ],
            'scatter' => [
                'MarketingReach',
                'axis.scatter',
                'AbstractScatterGraph',
                'marketing-reach',
                'Marketing Reach',
            ],
        ];
    }
}
