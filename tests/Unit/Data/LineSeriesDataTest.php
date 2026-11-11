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
     * @param  string  $message  Expected validation message.
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(string $key, string $label, array $values, string $message): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new LineSeriesData($key, $label, $values);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>, string}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => [
                'Revenue',
                'Revenue',
                [1200],
                'Line series key [Revenue] must use lowercase kebab-case.',
            ],
            'empty label'    => ['revenue', ' ', [1200], 'Line series label must not be empty.'],
            'invalid values' => ['revenue', 'Revenue', ['1200'], 'Line series values must be numeric or null.'],
        ];
    }
}
