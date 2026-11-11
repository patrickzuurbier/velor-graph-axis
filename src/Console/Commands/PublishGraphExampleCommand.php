<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Console\Commands;

use Velor\GraphAxis\Enums\GraphExampleOperationStatusEnum;
use Velor\GraphAxis\Services\GraphExampleCatalogService;
use Velor\GraphAxis\Services\GraphExamplePublisherService;

class PublishGraphExampleCommand extends GraphExampleCommand
{
    protected $signature = 'velor-graph-axis:publish
        {example? : The Axis graph example key}
        {--all : Publish every Axis graph example}';

    protected $description = 'Publish Axis graph examples.';

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
            $status = $this->publisher->publish($example);
            $target = "app/Graphs/{$example->target}";

            if ($status === GraphExampleOperationStatusEnum::PUBLISHED) {
                $this->components->info("Axis graph example [{$example->key}] published to [{$target}].");

                continue;
            }

            $failed = true;
            $message = $status === GraphExampleOperationStatusEnum::EXISTS
                ? "Axis graph example target [{$target}] already exists."
                : "Axis graph example source for [{$example->key}] does not exist.";

            $this->components->error($message);
        }

        return $failed ? self::FAILURE : self::SUCCESS;
    }
}
