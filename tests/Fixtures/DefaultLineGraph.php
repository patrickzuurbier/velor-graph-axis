<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Fixtures;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractLineGraph;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Data\LineGraphResultData;

class DefaultLineGraph extends AbstractLineGraph
{
    public function key(): string
    {
        return 'default';
    }

    public function title(): string
    {
        return 'Default';
    }

    public function result(GraphContextInterface $context): LineGraphResultInterface
    {
        return new LineGraphResultData([], []);
    }
}
