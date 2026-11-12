<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class MakeAxisGraphCommand extends GeneratorCommand
{
    protected $signature = 'velor:make:axis-graph
        {name : The graph class name}
        {--line : Generate a line graph}
        {--bar : Generate a bar graph}
        {--pictorial-bar : Generate a pictorial bar graph}
        {--scatter : Generate a scatter graph}
        {--mixed : Generate a mixed graph}
        {--force : Overwrite the graph if it already exists}';

    protected $description = 'Generate an Axis graph.';

    protected $type = 'Axis graph';

    protected string $stub;

    public function __construct(Filesystem $files)
    {
        parent::__construct($files);
    }

    public function handle(): ?bool
    {
        $types = [
            'line'          => 'axis.line.stub',
            'bar'           => 'axis.bar.stub',
            'pictorial-bar' => 'axis.pictorial-bar.stub',
            'scatter'       => 'axis.scatter.stub',
            'mixed'         => 'axis.mixed.stub',
        ];
        $selectedTypes = array_filter(
            $types,
            fn (string $stub, string $option): bool => (bool) $this->option($option),
            ARRAY_FILTER_USE_BOTH,
        );

        if (count($selectedTypes) !== 1) {
            $this->fail('Select exactly one Axis graph type.');
        }

        if ($this->isReservedName($this->getNameInput())) {
            $this->fail('The graph name is reserved by PHP.');
        }

        if (! $this->option('force') && $this->alreadyExists($this->getNameInput())) {
            $this->fail('Graph already exists.');
        }

        $this->stub = dirname(__DIR__, 3) . '/stubs/' . reset($selectedTypes);

        return parent::handle();
    }

    protected function getStub(): string
    {
        return $this->stub;
    }

    protected function getDefaultNamespace($rootNamespace): string
    {
        return $rootNamespace . '\\Graphs';
    }

    protected function buildClass($name): string
    {
        $stub = parent::buildClass($name);
        $class = class_basename($name);
        $baseName = Str::substr($class, 0, -strlen('Graph'));

        return str_replace(
            ['{{ graphKey }}', '{{graphKey}}', '{{ graphTitle }}', '{{graphTitle}}'],
            [Str::kebab($baseName), Str::kebab($baseName), Str::headline($baseName), Str::headline($baseName)],
            $stub,
        );
    }

    protected function getNameInput(): string
    {
        $name = parent::getNameInput();

        return Str::endsWith($name, 'Graph') ? $name : "{$name}Graph";
    }
}
