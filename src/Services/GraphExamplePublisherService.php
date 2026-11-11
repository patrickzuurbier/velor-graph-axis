<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Services;

use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Application;
use Velor\GraphAxis\Data\GraphExampleData;
use Velor\GraphAxis\Enums\GraphExampleOperationStatusEnum;

class GraphExamplePublisherService
{
    public function __construct(
        protected Filesystem $files,
        protected Application $application,
    ) {
    }

    public function publish(GraphExampleData $example): GraphExampleOperationStatusEnum
    {
        if (! $this->files->isFile($example->source)) {
            return GraphExampleOperationStatusEnum::SOURCE_MISSING;
        }

        $target = $this->targetPath($example);

        if ($this->files->exists($target)) {
            return GraphExampleOperationStatusEnum::EXISTS;
        }

        $this->files->ensureDirectoryExists(dirname($target));
        $this->files->copy($example->source, $target);

        return GraphExampleOperationStatusEnum::PUBLISHED;
    }

    public function remove(GraphExampleData $example): GraphExampleOperationStatusEnum
    {
        $target = $this->targetPath($example);

        if (! $this->files->exists($target)) {
            return GraphExampleOperationStatusEnum::MISSING;
        }

        if (! $this->files->isFile($example->source)) {
            return GraphExampleOperationStatusEnum::SOURCE_MISSING;
        }

        if ($this->files->hash($example->source, 'sha256') !== $this->files->hash($target, 'sha256')) {
            return GraphExampleOperationStatusEnum::MODIFIED;
        }

        $this->files->delete($target);

        return GraphExampleOperationStatusEnum::REMOVED;
    }

    protected function targetPath(GraphExampleData $example): string
    {
        return $this->application->path('Graphs/' . $example->target);
    }
}
