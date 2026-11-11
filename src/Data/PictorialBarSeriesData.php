<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Enums\PictorialBarModeEnum;
use Velor\GraphAxis\Enums\PictorialBarSymbolEnum;

class PictorialBarSeriesData
{
    /**
     * @var array<int, int|float|null>
     */
    public readonly array $values;

    /**
     * @param string $key Stable lowercase kebab-case series key.
     * @param string $label Presentational series label.
     * @param array<int, mixed> $values Ordered non-negative values to validate.
     */
    public function __construct(
        public readonly string $key,
        public readonly string $label,
        array $values,
        public readonly PictorialBarSymbolEnum $symbol = PictorialBarSymbolEnum::CIRCLE,
        public readonly PictorialBarModeEnum $mode = PictorialBarModeEnum::SCALED,
    ) {
        if (preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $key) !== 1) {
            throw new InvalidArgumentException("Pictorial bar series key [{$key}] must use lowercase kebab-case.");
        }

        if (trim($label) === '') {
            throw new InvalidArgumentException('Pictorial bar series label must not be empty.');
        }

        $this->values = array_map(
            static function (mixed $value): int|float|null {
                if ($value === null) {
                    return null;
                }

                if ((! is_int($value) && ! is_float($value)) || $value < 0) {
                    throw new InvalidArgumentException(
                        'Pictorial bar series values must be non-negative numeric values or null.',
                    );
                }

                return $value;
            },
            $values,
        );
    }

    /**
     * @return array{
     *     key: string,
     *     label: string,
     *     values: array<int, int|float|null>,
     *     symbol: string,
     *     mode: string
     * }
     */
    public function toArray(): array
    {
        return [
            'key'    => $this->key,
            'label'  => $this->label,
            'values' => $this->values,
            'symbol' => $this->symbol->value,
            'mode'   => $this->mode->value,
        ];
    }
}
