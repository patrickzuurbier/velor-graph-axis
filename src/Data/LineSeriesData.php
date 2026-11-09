<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;

class LineSeriesData
{
    /**
     * @var array<int, int|float|null>
     */
    public readonly array $values;

    /**
     * @param  string  $key  Stable lowercase kebab-case series key.
     * @param  string  $label  Presentational series label.
     * @param  array<int, mixed>  $values  Ordered series values to validate.
     */
    public function __construct(
        public readonly string $key,
        public readonly string $label,
        array $values,
    ) {
        if (preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $key) !== 1) {
            throw new InvalidArgumentException("Line series key [{$key}] must use lowercase kebab-case.");
        }

        if (trim($label) === '') {
            throw new InvalidArgumentException('Line series label must not be empty.');
        }

        $this->values = array_map(
            static function (mixed $value): int|float|null {
                if (! is_int($value) && ! is_float($value) && $value !== null) {
                    throw new InvalidArgumentException('Line series values must be numeric or null.');
                }

                return $value;
            },
            $values,
        );
    }

    /**
     * @return array{key: string, label: string, values: array<int, int|float|null>}
     */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'values' => $this->values,
        ];
    }
}
