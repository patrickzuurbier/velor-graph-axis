<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Contracts\MixedGraphResultInterface;

class MixedGraphResultData implements MixedGraphResultInterface
{
    /**
     * @var array<int, string>
     */
    public readonly array $categories;

    /**
     * @var array<int, MixedSeriesData>
     */
    public readonly array $series;

    /**
     * @param array<int, mixed> $categories
     * @param array<int, mixed> $series
     */
    public function __construct(
        array $categories,
        array $series,
        public readonly ?string $primaryAxisLabel = null,
        public readonly ?string $secondaryAxisLabel = null,
    ) {
        foreach ([$primaryAxisLabel, $secondaryAxisLabel] as $axisLabel) {
            if ($axisLabel !== null && trim($axisLabel) === '') {
                throw new InvalidArgumentException('Mixed graph axis labels must not be empty when provided.');
            }
        }

        $this->categories = array_map(
            static function (mixed $category): string {
                if (! is_string($category)) {
                    throw new InvalidArgumentException('Mixed graph categories must be strings.');
                }

                return $category;
            },
            $categories,
        );
        $this->series = array_map(
            static function (mixed $series): MixedSeriesData {
                if (! $series instanceof MixedSeriesData) {
                    throw new InvalidArgumentException(
                        'Mixed graph series must contain MixedSeriesData instances.',
                    );
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
     *         type: string,
     *         axis: string,
     *         stack: string|null
     *     }>,
     *     primaryAxisLabel: string|null,
     *     secondaryAxisLabel: string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'categories' => $this->categories,
            'series'     => array_map(
                static fn (MixedSeriesData $series): array => $series->toArray(),
                $this->series,
            ),
            'primaryAxisLabel'   => $this->primaryAxisLabel,
            'secondaryAxisLabel' => $this->secondaryAxisLabel,
        ];
    }

    protected function validateSeries(): void
    {
        $keys = [];

        foreach ($this->series as $series) {
            if (count($series->values) !== count($this->categories)) {
                throw new InvalidArgumentException(
                    "Mixed series [{$series->key}] must contain one value for every category.",
                );
            }

            if (in_array($series->key, $keys, true)) {
                throw new InvalidArgumentException("Mixed series key [{$series->key}] is duplicated.");
            }

            $keys[] = $series->key;
        }
    }
}
