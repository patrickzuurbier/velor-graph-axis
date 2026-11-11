<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;
use Velor\GraphAxis\Enums\MixedSeriesTypeEnum;
use Velor\GraphAxis\Enums\MixedValueAxisEnum;

class MixedSeriesData
{
    /**
     * @var array<int, int|float|null>
     */
    public readonly array $values;

    /**
     * @param string $key Stable lowercase kebab-case series key.
     * @param string $label Presentational series label.
     * @param array<int, mixed> $values Ordered series values to validate.
     * @param string|null $stack Optional lowercase kebab-case stack key for bar series.
     */
    public function __construct(
        public readonly string $key,
        public readonly string $label,
        array $values,
        public readonly MixedSeriesTypeEnum $type,
        public readonly MixedValueAxisEnum $axis = MixedValueAxisEnum::PRIMARY,
        public readonly ?string $stack = null,
    ) {
        if (preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $key) !== 1) {
            throw new InvalidArgumentException("Mixed series key [{$key}] must use lowercase kebab-case.");
        }

        if (trim($label) === '') {
            throw new InvalidArgumentException('Mixed series label must not be empty.');
        }

        if ($stack !== null && preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/', $stack) !== 1) {
            throw new InvalidArgumentException("Mixed series stack [{$stack}] must use lowercase kebab-case.");
        }

        if ($type === MixedSeriesTypeEnum::LINE && $stack !== null) {
            throw new InvalidArgumentException('Only mixed bar series may declare a stack.');
        }

        $this->values = array_map(
            static function (mixed $value): int|float|null {
                if (! is_int($value) && ! is_float($value) && $value !== null) {
                    throw new InvalidArgumentException('Mixed series values must be numeric or null.');
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
     *     type: string,
     *     axis: string,
     *     stack: string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'key'    => $this->key,
            'label'  => $this->label,
            'values' => $this->values,
            'type'   => $this->type->value,
            'axis'   => $this->axis->value,
            'stack'  => $this->stack,
        ];
    }
}
