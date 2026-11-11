<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

use InvalidArgumentException;

class ScatterPointData
{
    public function __construct(
        public readonly int|float $x,
        public readonly int|float $y,
        public readonly int|float|null $size = null,
        public readonly ?string $label = null,
    ) {
        if ($size !== null && $size < 0) {
            throw new InvalidArgumentException('Scatter point size must be non-negative or null.');
        }

        if ($label !== null && trim($label) === '') {
            throw new InvalidArgumentException('Scatter point label must not be empty when provided.');
        }
    }

    /**
     * @return array{x: int|float, y: int|float, size: int|float|null, label: string|null}
     */
    public function toArray(): array
    {
        return [
            'x'     => $this->x,
            'y'     => $this->y,
            'size'  => $this->size,
            'label' => $this->label,
        ];
    }
}
