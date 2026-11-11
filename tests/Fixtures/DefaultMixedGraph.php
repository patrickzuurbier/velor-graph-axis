<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Fixtures;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractMixedGraph;
use Velor\GraphAxis\Contracts\MixedGraphResultInterface;
use Velor\GraphAxis\Data\MixedGraphResultData;

class DefaultMixedGraph extends AbstractMixedGraph
{
    public function key(): string
    {
        return 'default';
    }

    public function title(): string
    {
        return 'Default';
    }

    public function result(GraphContextInterface $context): MixedGraphResultInterface
    {
        return new MixedGraphResultData([], []);
    }
}
