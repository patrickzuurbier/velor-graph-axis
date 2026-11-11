<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Console\Commands;

use Velor\GraphAxis\Enums\GraphExampleOperationStatusEnum;
use Velor\GraphAxis\Services\GraphExampleCatalogService;
use Velor\GraphAxis\Services\GraphExamplePublisherService;

class RemoveGraphExampleCommand extends GraphExampleCommand
{
    protected $signature = 'velor-graph-axis:remove
        {example? : The Axis graph example key}
        {--all : Remove every unchanged published Axis graph example}';

    protected $description = 'Remove unchanged Axis graph examples.';

    public function __construct(
        GraphExampleCatalogService $examples,
        protected GraphExamplePublisherService $publisher,
    ) {
        parent::__construct($examples);
    }

    public function handle(): int
    {
        $failed = false;

        foreach ($this->selectedExamples() as $example) {
            $status = $this->publisher->remove($example);
            $target = "app/Graphs/{$example->target}";

            if ($status === GraphExampleOperationStatusEnum::REMOVED) {
                $this->components->info("Axis graph example [{$example->key}] removed from [{$target}].");

                continue;
            }

            if ($status === GraphExampleOperationStatusEnum::MISSING) {
                $this->components->warn("Axis graph example target [{$target}] does not exist.");

                continue;
            }

            $failed = true;
            $message = $status === GraphExampleOperationStatusEnum::MODIFIED
                ? "Axis graph example target [{$target}] was modified and was not removed."
                : "Axis graph example source for [{$example->key}] does not exist; [{$target}] was not removed.";

            $this->components->error($message);
        }

        return $failed ? self::FAILURE : self::SUCCESS;
    }
}
