<?php

declare(strict_types=1);

namespace Velor\GraphAxis;

use App\Services\Graphs\AbstractGraph;
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

abstract class AbstractLineGraph extends AbstractGraph implements LineGraphInterface
{
    abstract public function result(GraphContextInterface $context): LineGraphResultInterface;

    public function type(): string
    {
        return LineGraphInterface::TYPE;
    }
}
