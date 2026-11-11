<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;

class ScatterSeriesData
{
    /**
     * @var array<int, ScatterPointData>
     */
    public readonly array $points;

    /**
     * @param string $key Stable lowercase kebab-case series key.
     * @param string $label Presentational series label.
     * @param array<int, mixed> $points Scatter points to validate.
     */
    public function __construct(
        public readonly string $key,
        public readonly string $label,
        array $points,
    ) {
        if (preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $key) !== 1) {
            throw new InvalidArgumentException("Scatter series key [{$key}] must use lowercase kebab-case.");
        }

        if (trim($label) === '') {
            throw new InvalidArgumentException('Scatter series label must not be empty.');
        }

        $this->points = array_map(
            static function (mixed $point): ScatterPointData {
                if (! $point instanceof ScatterPointData) {
                    throw new InvalidArgumentException(
                        'Scatter series points must contain ScatterPointData instances.',
                    );
                }

                return $point;
            },
            $points,
        );
    }

    /**
     * @return array{
     *     key: string,
     *     label: string,
     *     points: array<int, array{x: int|float, y: int|float, size: int|float|null, label: string|null}>
     * }
     */
    public function toArray(): array
    {
        return [
            'key'    => $this->key,
            'label'  => $this->label,
            'points' => array_map(
                static fn (ScatterPointData $point): array => $point->toArray(),
                $this->points,
            ),
        ];
    }
}
