<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;

class ScatterGraphResultData implements ScatterGraphResultInterface
{
    /**
     * @var array<int, ScatterSeriesData>
     */
    public readonly array $series;

    /**
     * @param array<int, mixed> $series
     */
    public function __construct(
        array $series,
        public readonly ?string $xAxisLabel = null,
        public readonly ?string $yAxisLabel = null,
    ) {
        foreach ([$xAxisLabel, $yAxisLabel] as $axisLabel) {
            if ($axisLabel !== null && trim($axisLabel) === '') {
                throw new InvalidArgumentException('Scatter axis labels must not be empty when provided.');
            }
        }

        $this->series = array_map(
            static function (mixed $series): ScatterSeriesData {
                if (! $series instanceof ScatterSeriesData) {
                    throw new InvalidArgumentException(
                        'Scatter graph series must contain ScatterSeriesData instances.',
                    );
                }

                return $series;
            },
            $series,
        );
        $this->validateSeriesKeys();
    }

    /**
     * @return array{
     *     series: array<int, array{
     *         key: string,
     *         label: string,
     *         points: array<int, array{x: int|float, y: int|float, size: int|float|null, label: string|null}>
     *     }>,
     *     xAxisLabel: string|null,
     *     yAxisLabel: string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'series' => array_map(
                static fn (ScatterSeriesData $series): array => $series->toArray(),
                $this->series,
            ),
            'xAxisLabel' => $this->xAxisLabel,
            'yAxisLabel' => $this->yAxisLabel,
        ];
    }

    protected function validateSeriesKeys(): void
    {
        $keys = [];

        foreach ($this->series as $series) {
            if (in_array($series->key, $keys, true)) {
                throw new InvalidArgumentException("Scatter series key [{$series->key}] is duplicated.");
            }

            $keys[] = $series->key;
        }
    }
}
