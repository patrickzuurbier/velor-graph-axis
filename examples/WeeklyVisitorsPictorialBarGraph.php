<?php

declare(strict_types=1);

namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Illuminate\Contracts\Translation\Translator;
use Velor\GraphAxis\AbstractPictorialBarGraph;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;
use Velor\GraphAxis\Data\PictorialBarGraphResultData;
use Velor\GraphAxis\Data\PictorialBarSeriesData;
use Velor\GraphAxis\Enums\PictorialBarModeEnum;
use Velor\GraphAxis\Enums\PictorialBarSymbolEnum;

class WeeklyVisitorsPictorialBarGraph extends AbstractPictorialBarGraph
{
    public function __construct(
        protected Translator $translator,
    ) {
    }

    public function key(): string
    {
        return 'weekly-visitors-showcase';
    }

    public function title(): string
    {
        return $this->translator->get('velor-graph-axis::graphs.weekly-visitors.title');
    }

    public function description(): ?string
    {
        return $this->translator->get('velor-graph-axis::graphs.weekly-visitors.description');
    }

    public function result(GraphContextInterface $context): PictorialBarGraphResultInterface
    {
        return new PictorialBarGraphResultData(
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [
                new PictorialBarSeriesData(
                    'visitors',
                    $this->translator->get('velor-graph-axis::graphs.weekly-visitors.visitors'),
                    [7, 9, 8, 11, 13, 16, 12],
                    symbol: PictorialBarSymbolEnum::CIRCLE,
                    mode: PictorialBarModeEnum::REPEATED,
                ),
            ],
        );
    }
}
