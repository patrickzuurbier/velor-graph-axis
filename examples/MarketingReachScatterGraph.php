<?php

declare(strict_types=1);

namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Illuminate\Contracts\Translation\Translator;
use Velor\GraphAxis\AbstractScatterGraph;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;
use Velor\GraphAxis\Data\ScatterGraphResultData;
use Velor\GraphAxis\Data\ScatterPointData;
use Velor\GraphAxis\Data\ScatterSeriesData;

class MarketingReachScatterGraph extends AbstractScatterGraph
{
    public function __construct(
        protected Translator $translator,
    ) {
    }

    public function key(): string
    {
        return 'marketing-reach-showcase';
    }

    public function title(): string
    {
        return $this->translator->get('velor-graph-axis::graphs.marketing-reach.title');
    }

    public function description(): ?string
    {
        return $this->translator->get('velor-graph-axis::graphs.marketing-reach.description');
    }

    public function result(GraphContextInterface $context): ScatterGraphResultInterface
    {
        return new ScatterGraphResultData(
            series: [
                new ScatterSeriesData(
                    'search',
                    $this->translator->get('velor-graph-axis::graphs.marketing-reach.search'),
                    [
                        new ScatterPointData(12, 42, 180, 'Spring campaign'),
                        new ScatterPointData(19, 58, 260, 'Summer campaign'),
                        new ScatterPointData(28, 71, 340, 'Autumn campaign'),
                    ],
                ),
                new ScatterSeriesData(
                    'social',
                    $this->translator->get('velor-graph-axis::graphs.marketing-reach.social'),
                    [
                        new ScatterPointData(9, 34, 140, 'Product launch'),
                        new ScatterPointData(17, 49, 210, 'Brand campaign'),
                        new ScatterPointData(24, 63, 300, 'Holiday campaign'),
                    ],
                ),
            ],
            xAxisLabel: $this->translator->get('velor-graph-axis::graphs.marketing-reach.budget'),
            yAxisLabel: $this->translator->get('velor-graph-axis::graphs.marketing-reach.reach'),
        );
    }
}
