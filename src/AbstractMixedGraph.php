<?php

declare(strict_types=1);

namespace Velor\GraphAxis;

use App\Services\Graphs\AbstractGraph;
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\MixedGraphInterface;
use Velor\GraphAxis\Contracts\MixedGraphResultInterface;

abstract class AbstractMixedGraph extends AbstractGraph implements MixedGraphInterface
{
    abstract public function result(GraphContextInterface $context): MixedGraphResultInterface;

    public function type(): string
    {
        return MixedGraphInterface::TYPE;
    }
}
