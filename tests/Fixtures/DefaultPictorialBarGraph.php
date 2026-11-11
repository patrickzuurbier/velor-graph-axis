<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Fixtures;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractPictorialBarGraph;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;
use Velor\GraphAxis\Data\PictorialBarGraphResultData;

class DefaultPictorialBarGraph extends AbstractPictorialBarGraph
{
    public function key(): string
    {
        return 'default';
    }

    public function title(): string
    {
        return 'Default';
    }

    public function result(GraphContextInterface $context): PictorialBarGraphResultInterface
    {
        return new PictorialBarGraphResultData([], []);
    }
}
