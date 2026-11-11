<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Enums\BarOrientationEnum;
use Velor\GraphAxis\Enums\BarValueModeEnum;

class BarGraphResultData implements BarGraphResultInterface
{
    /**
     * @var array<int, string>
     */
    public readonly array $categories;

    /**
     * @var array<int, BarSeriesData>
     */
    public readonly array $series;

    /**
     * @param array<int, mixed> $categories
     * @param array<int, mixed> $series
     */
    public function __construct(
        array $categories,
        array $series,
        public readonly BarOrientationEnum $orientation = BarOrientationEnum::VERTICAL,
        public readonly BarValueModeEnum $valueMode = BarValueModeEnum::VALUE,
    ) {
        $this->categories = array_map(
            static function (mixed $category): string {
                if (! is_string($category)) {
                    throw new InvalidArgumentException('Bar graph categories must be strings.');
                }

                return $category;
            },
            $categories,
        );
        $this->series = array_map(
            static function (mixed $series): BarSeriesData {
                if (! $series instanceof BarSeriesData) {
                    throw new InvalidArgumentException('Bar graph series must contain BarSeriesData instances.');
                }

                return $series;
            },
            $series,
        );
        $this->validateSeries();
    }

    /**
     * @return array{
     *     categories: array<int, string>,
     *     series: array<int, array{
     *         key: string,
     *         label: string,
     *         values: array<int, int|float|null>,
     *         stack: string|null
     *     }>,
     *     orientation: string,
     *     valueMode: string
     * }
     */
    public function toArray(): array
    {
        return [
            'categories' => $this->categories,
            'series'     => array_map(
                static fn (BarSeriesData $series): array => $series->toArray(),
                $this->series,
            ),
            'orientation' => $this->orientation->value,
            'valueMode'   => $this->valueMode->value,
        ];
    }

    protected function validateSeries(): void
    {
        $keys = [];
        $percentageStackTotals = [];

        foreach ($this->series as $series) {
            if (count($series->values) !== count($this->categories)) {
                throw new InvalidArgumentException(
                    "Bar series [{$series->key}] must contain one value for every category.",
                );
            }

            if (in_array($series->key, $keys, true)) {
                throw new InvalidArgumentException("Bar series key [{$series->key}] is duplicated.");
            }

            if ($this->valueMode === BarValueModeEnum::PERCENTAGE) {
                foreach ($series->values as $index => $value) {
                    if ($value !== null && ($value < 0 || $value > 100)) {
                        throw new InvalidArgumentException(
                            "Percentage bar series [{$series->key}] values must be between 0 and 100.",
                        );
                    }

                    if ($series->stack === null || $value === null) {
                        continue;
                    }

                    $percentageStackTotals[$series->stack][$index] ??= 0;
                    $percentageStackTotals[$series->stack][$index] += $value;

                    if ($percentageStackTotals[$series->stack][$index] > 100) {
                        throw new InvalidArgumentException(
                            "Percentage bar stack [{$series->stack}] must not exceed 100 per category.",
                        );
                    }
                }
            }

            $keys[] = $series->key;
        }
    }
}
