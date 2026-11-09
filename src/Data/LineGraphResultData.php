<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

class LineGraphResultData implements LineGraphResultInterface
{
    /**
     * @var array<int, string>
     */
    public readonly array $categories;

    /**
     * @var array<int, LineSeriesData>
     */
    public readonly array $series;

    /**
     * @param  array<int, mixed>  $categories
     * @param  array<int, mixed>  $series
     */
    public function __construct(
        array $categories,
        array $series,
    ) {
        $this->categories = array_map(
            static function (mixed $category): string {
                if (! is_string($category)) {
                    throw new InvalidArgumentException('Line graph categories must be strings.');
                }

                return $category;
            },
            $categories,
        );
        $this->series = array_map(
            static function (mixed $series): LineSeriesData {
                if (! $series instanceof LineSeriesData) {
                    throw new InvalidArgumentException('Line graph series must contain LineSeriesData instances.');
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
     *     series: array<int, array{key: string, label: string, values: array<int, int|float|null>}>
     * }
     */
    public function toArray(): array
    {
        return [
            'categories' => $this->categories,
            'series' => array_map(
                static fn (LineSeriesData $series): array => $series->toArray(),
                $this->series,
            ),
        ];
    }

    protected function validateSeries(): void
    {
        $keys = [];

        foreach ($this->series as $series) {
            if (count($series->values) !== count($this->categories)) {
                throw new InvalidArgumentException(
                    "Line series [{$series->key}] must contain one value for every category.",
                );
            }

            if (in_array($series->key, $keys, true)) {
                throw new InvalidArgumentException("Line series key [{$series->key}] is duplicated.");
            }

            $keys[] = $series->key;
        }
    }
}
