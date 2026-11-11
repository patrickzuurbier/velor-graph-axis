<?php

declare(strict_types=1);

namespace Velor\GraphAxis;

use App\Services\Graphs\AbstractGraph;
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\ScatterGraphInterface;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;

abstract class AbstractScatterGraph extends AbstractGraph implements ScatterGraphInterface
{
    abstract public function result(GraphContextInterface $context): ScatterGraphResultInterface;

    public function type(): string
    {
        return ScatterGraphInterface::TYPE;
    }
}
