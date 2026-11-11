<?php

declare(strict_types=1);

namespace Velor\GraphAxis;

use App\Services\Graphs\AbstractGraph;
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;

abstract class AbstractPictorialBarGraph extends AbstractGraph implements PictorialBarGraphInterface
{
    abstract public function result(GraphContextInterface $context): PictorialBarGraphResultInterface;

    public function type(): string
    {
        return PictorialBarGraphInterface::TYPE;
    }
}
