<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Fixtures;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractScatterGraph;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;
use Velor\GraphAxis\Data\ScatterGraphResultData;

class DefaultScatterGraph extends AbstractScatterGraph
{
    public function key(): string
    {
        return 'default';
    }

    public function title(): string
    {
        return 'Default';
    }

    public function result(GraphContextInterface $context): ScatterGraphResultInterface
    {
        return new ScatterGraphResultData([]);
    }
}
