<?php

declare(strict_types=1);

namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Illuminate\Contracts\Translation\Translator;
use Velor\GraphAxis\AbstractMixedGraph;
use Velor\GraphAxis\Contracts\MixedGraphResultInterface;
use Velor\GraphAxis\Data\MixedGraphResultData;
use Velor\GraphAxis\Data\MixedSeriesData;
use Velor\GraphAxis\Enums\MixedSeriesTypeEnum;
use Velor\GraphAxis\Enums\MixedValueAxisEnum;

class MonthlyPerformanceMixedGraph extends AbstractMixedGraph
{
    public function __construct(
        protected Translator $translator,
    ) {
    }

    public function key(): string
    {
        return 'monthly-performance-showcase';
    }

    public function title(): string
    {
        return $this->translator->get('velor-graph-axis::graphs.monthly-performance.title');
    }

    public function description(): ?string
    {
        return $this->translator->get('velor-graph-axis::graphs.monthly-performance.description');
    }

    public function result(GraphContextInterface $context): MixedGraphResultInterface
    {
        return new MixedGraphResultData(
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            series: [
                new MixedSeriesData(
                    'new-visitors',
                    $this->translator->get('velor-graph-axis::graphs.monthly-performance.new-visitors'),
                    [720, 810, 870, 940, 1010, 1120],
                    MixedSeriesTypeEnum::BAR,
                    stack: 'visitors',
                ),
                new MixedSeriesData(
                    'returning-visitors',
                    $this->translator->get('velor-graph-axis::graphs.monthly-performance.returning-visitors'),
                    [310, 350, 390, 430, 470, 520],
                    MixedSeriesTypeEnum::BAR,
                    stack: 'visitors',
                ),
                new MixedSeriesData(
                    'conversion',
                    $this->translator->get('velor-graph-axis::graphs.monthly-performance.conversion'),
                    [2.8, 3.1, 3.4, 3.3, 3.7, 4.0],
                    MixedSeriesTypeEnum::LINE,
                    MixedValueAxisEnum::SECONDARY,
                ),
            ],
            primaryAxisLabel: $this->translator->get('velor-graph-axis::graphs.monthly-performance.visitors'),
            secondaryAxisLabel: $this->translator->get(
                'velor-graph-axis::graphs.monthly-performance.conversion-axis',
            ),
        );
    }
}
