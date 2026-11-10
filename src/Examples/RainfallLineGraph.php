<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Examples;

use App\Services\Graphs\Contracts\GraphContextInterface;
use App\Services\Graphs\Data\GraphControlData;
use App\Services\Graphs\Data\GraphControlOptionData;
use App\Services\Graphs\Enums\GraphControlModeEnum;
use Illuminate\Contracts\Translation\Translator;
use Velor\GraphAxis\AbstractLineGraph;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Data\LineGraphResultData;
use Velor\GraphAxis\Data\LineSeriesData;

class RainfallLineGraph extends AbstractLineGraph
{
    public function __construct(
        protected Translator $translator,
    ) {
    }

    public function key(): string
    {
        return 'rainfall-showcase';
    }

    public function title(): string
    {
        return $this->translator->get('velor-graph-axis::graphs.rainfall.title');
    }

    public function description(): ?string
    {
        return $this->translator->get('velor-graph-axis::graphs.rainfall.description');
    }

    public function controls(): array
    {
        return [
            new GraphControlData(
                key: 'period',
                label: $this->translator->get('velor-graph-axis::graphs.controls.period'),
                options: [
                    new GraphControlOptionData(
                        'week',
                        $this->translator->get('velor-graph-axis::graphs.periods.week'),
                    ),
                    new GraphControlOptionData(
                        'month',
                        $this->translator->get('velor-graph-axis::graphs.periods.month'),
                    ),
                    new GraphControlOptionData(
                        'year',
                        $this->translator->get('velor-graph-axis::graphs.periods.year'),
                    ),
                ],
                defaultValue: 'month',
                mode: GraphControlModeEnum::SERVER,
            ),
            new GraphControlData(
                key: 'scale',
                label: $this->translator->get('velor-graph-axis::graphs.controls.scale'),
                options: [
                    new GraphControlOptionData(
                        'linear',
                        $this->translator->get('velor-graph-axis::graphs.scales.linear'),
                    ),
                    new GraphControlOptionData(
                        'logarithmic',
                        $this->translator->get('velor-graph-axis::graphs.scales.logarithmic'),
                    ),
                ],
                defaultValue: 'linear',
                mode: GraphControlModeEnum::CLIENT,
            ),
        ];
    }

    public function result(GraphContextInterface $context): LineGraphResultInterface
    {
        [$categories, $coastalValues, $inlandValues] = match ($context->control('period')) {
            'week' => [
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                [8, 13, 5, 19, 11, 16, 7],
                [5, 9, 4, 12, 8, 10, 6],
            ],
            'year' => [
                ['2022', '2023', '2024', '2025', '2026'],
                [912, 1048, 986, 1126, 1014],
                [714, 802, 765, 884, 821],
            ],
            default => [
                ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                [82, 68, 74, 59, 63, 71, 78, 91, 102, 116, 109, 88],
                [61, 54, 57, 46, 51, 58, 64, 73, 81, 94, 86, 69],
            ],
        };

        return new LineGraphResultData(
            categories: $categories,
            series: [
                new LineSeriesData(
                    'coastal-station',
                    $this->translator->get('velor-graph-axis::graphs.rainfall.coastal'),
                    $coastalValues,
                ),
                new LineSeriesData(
                    'inland-station',
                    $this->translator->get('velor-graph-axis::graphs.rainfall.inland'),
                    $inlandValues,
                ),
            ],
        );
    }
}
