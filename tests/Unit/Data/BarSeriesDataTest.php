<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\BarSeriesData;

class BarSeriesDataTest extends TestCase
{
    /**
     * @param string $key Series key under test.
     * @param string $label Series label under test.
     * @param array<int, mixed> $values
     * @param string|null $stack Stack key under test.
     * @param string $message Expected validation message.
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(
        string $key,
        string $label,
        array $values,
        ?string $stack,
        string $message,
    ): void {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new BarSeriesData($key, $label, $values, $stack);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>, string|null, string}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => [
                'Revenue',
                'Revenue',
                [1200],
                null,
                'Bar series key [Revenue] must use lowercase kebab-case.',
            ],
            'empty label'    => ['revenue', ' ', [1200], null, 'Bar series label must not be empty.'],
            'invalid values' => [
                'revenue',
                'Revenue',
                ['1200'],
                null,
                'Bar series values must be numeric or null.',
            ],
            'invalid stack' => [
                'revenue',
                'Revenue',
                [1200],
                'Sales Total',
                'Bar series stack [Sales Total] must use lowercase kebab-case.',
            ],
        ];
    }
}
