<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Fixtures;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractBarGraph;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Data\BarGraphResultData;

class DefaultBarGraph extends AbstractBarGraph
{
    public function key(): string
    {
        return 'default';
    }

    public function title(): string
    {
        return 'Default';
    }

    public function result(GraphContextInterface $context): BarGraphResultInterface
    {
        return new BarGraphResultData([], []);
    }
}
