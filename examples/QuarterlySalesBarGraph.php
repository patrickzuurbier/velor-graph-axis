<?php

declare(strict_types=1);

namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Illuminate\Contracts\Translation\Translator;
use Velor\GraphAxis\AbstractBarGraph;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Data\BarGraphResultData;
use Velor\GraphAxis\Data\BarSeriesData;

class QuarterlySalesBarGraph extends AbstractBarGraph
{
    public function __construct(
        protected Translator $translator,
    ) {
    }

    public function key(): string
    {
        return 'quarterly-sales-showcase';
    }

    public function title(): string
    {
        return $this->translator->get('velor-graph-axis::graphs.quarterly-sales.title');
    }

    public function description(): ?string
    {
        return $this->translator->get('velor-graph-axis::graphs.quarterly-sales.description');
    }

    public function result(GraphContextInterface $context): BarGraphResultInterface
    {
        return new BarGraphResultData(
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                new BarSeriesData(
                    'online',
                    $this->translator->get('velor-graph-axis::graphs.quarterly-sales.online'),
                    [82, 91, 104, 118],
                    stack: 'sales',
                ),
                new BarSeriesData(
                    'retail',
                    $this->translator->get('velor-graph-axis::graphs.quarterly-sales.retail'),
                    [64, 72, 69, 81],
                    stack: 'sales',
                ),
            ],
        );
    }
}
