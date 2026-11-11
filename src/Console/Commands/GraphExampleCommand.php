<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Console\Commands;

use Illuminate\Console\Command;
use Velor\GraphAxis\Data\GraphExampleData;
use Velor\GraphAxis\Services\GraphExampleCatalogService;

abstract class GraphExampleCommand extends Command
{
    public function __construct(
        protected GraphExampleCatalogService $examples,
    ) {
        parent::__construct();
    }

    /**
     * @return array<int, GraphExampleData>
     */
    protected function selectedExamples(): array
    {
        $key = $this->argument('example');
        $key = is_string($key) ? trim($key) : '';
        $all = (bool) $this->option('all');

        if ($key !== '' && $all) {
            $this->fail('Provide an example key or --all, not both.');
        }

        if ($all) {
            return $this->examples->all();
        }

        if ($key === '') {
            $this->fail('Provide an example key or use --all.');
        }

        $example = $this->examples->find($key);

        if ($example === null) {
            $this->fail("Axis graph example [{$key}] does not exist.");
        }

        return [$example];
    }
}
