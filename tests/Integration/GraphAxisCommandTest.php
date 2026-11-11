<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Integration;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Testing\PendingCommand;
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

    public function test_it_generates_an_application_line_graph(): void
    {
        $command = $this->artisan('velor:make:graph', [
            'name'   => 'MonthlySales',
            '--type' => 'axis.line',
        ]);

        $this->assertInstanceOf(PendingCommand::class, $command);
        $command->assertExitCode(Command::SUCCESS)->run();

        $path = $this->temporaryBasePath . '/app/Graphs/MonthlySalesGraph.php';

        $this->assertTrue($this->files->exists($path));

        $content = $this->files->get($path);

        $this->assertStringContainsString('class MonthlySalesGraph extends AbstractLineGraph', $content);
        $this->assertStringContainsString("return 'monthly-sales';", $content);
        $this->assertStringContainsString("return 'Monthly Sales';", $content);
        $this->assertNotEmpty(token_get_all($content, TOKEN_PARSE));
    }

    public function test_it_publishes_and_removes_the_rainfall_example(): void
    {
        $publish = $this->artisan('velor:graph:example:publish', [
            'example' => 'axis.rainfall-line',
        ]);

        $this->assertInstanceOf(PendingCommand::class, $publish);
        $publish->assertExitCode(Command::SUCCESS)->run();

        $path = $this->temporaryBasePath . '/app/Graphs/RainfallLineGraph.php';

        $this->assertTrue($this->files->exists($path));
        $this->assertNotEmpty(token_get_all($this->files->get($path), TOKEN_PARSE));

        $remove = $this->artisan('velor:graph:example:remove', [
            'example' => 'axis.rainfall-line',
        ]);

        $this->assertInstanceOf(PendingCommand::class, $remove);
        $remove->assertExitCode(Command::SUCCESS)->run();

        $this->assertFalse($this->files->exists($path));
    }
}
