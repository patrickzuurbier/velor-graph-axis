<?php

declare(strict_types=1);

namespace Velor\GraphAxis;

use App\Services\Graphs\AbstractGraph;
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\BarGraphInterface;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;

abstract class AbstractBarGraph extends AbstractGraph implements BarGraphInterface
{
    abstract public function result(GraphContextInterface $context): BarGraphResultInterface;

    public function type(): string
    {
        return BarGraphInterface::TYPE;
    }
}
