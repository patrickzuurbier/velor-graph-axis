<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Data;

class GraphExampleData
{
    public function __construct(
        public readonly string $key,
        public readonly string $source,
        public readonly string $target,
    ) {
    }
}
