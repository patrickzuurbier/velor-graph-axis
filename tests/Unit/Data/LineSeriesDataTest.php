<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\LineSeriesData;

class LineSeriesDataTest extends TestCase
{
    /**
     * @param  string  $key  Series key under test.
     * @param  string  $label  Series label under test.
     * @param  array<int, mixed>  $values  Series values under test.
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(string $key, string $label, array $values): void
    {
        $this->expectException(InvalidArgumentException::class);

        new LineSeriesData($key, $label, $values);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => ['Revenue', 'Revenue', [1200]],
            'empty label' => ['revenue', ' ', [1200]],
            'invalid values' => ['revenue', 'Revenue', ['1200']],
        ];
    }
}
