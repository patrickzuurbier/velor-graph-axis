<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;
use Velor\GraphAxis\Enums\BarOrientationEnum;

class PictorialBarGraphResultData implements PictorialBarGraphResultInterface
{
    /**
     * @var array<int, string>
     */
    public readonly array $categories;

    /**
     * @var array<int, PictorialBarSeriesData>
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
    ) {
        $this->categories = array_map(
            static function (mixed $category): string {
                if (! is_string($category)) {
                    throw new InvalidArgumentException('Pictorial bar graph categories must be strings.');
                }

                return $category;
            },
            $categories,
        );
        $this->series = array_map(
            static function (mixed $series): PictorialBarSeriesData {
                if (! $series instanceof PictorialBarSeriesData) {
                    throw new InvalidArgumentException(
                        'Pictorial bar graph series must contain PictorialBarSeriesData instances.',
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
     *         symbol: string,
     *         mode: string
     *     }>,
     *     orientation: string
     * }
     */
    public function toArray(): array
    {
        return [
            'categories' => $this->categories,
            'series'     => array_map(
                static fn (PictorialBarSeriesData $series): array => $series->toArray(),
                $this->series,
            ),
            'orientation' => $this->orientation->value,
        ];
    }

    protected function validateSeries(): void
    {
        $keys = [];

        foreach ($this->series as $series) {
            if (count($series->values) !== count($this->categories)) {
                throw new InvalidArgumentException(
                    "Pictorial bar series [{$series->key}] must contain one value for every category.",
                );
            }

            if (in_array($series->key, $keys, true)) {
                throw new InvalidArgumentException("Pictorial bar series key [{$series->key}] is duplicated.");
            }

            $keys[] = $series->key;
        }
    }
}
