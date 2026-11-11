<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\PictorialBarSeriesData;
use Velor\GraphAxis\Enums\PictorialBarModeEnum;
use Velor\GraphAxis\Enums\PictorialBarSymbolEnum;

class PictorialBarSeriesDataTest extends TestCase
{
    public function test_it_uses_a_scaled_circle_by_default(): void
    {
        $series = new PictorialBarSeriesData('visitors', 'Visitors', [12]);

        $this->assertSame(PictorialBarSymbolEnum::CIRCLE, $series->symbol);
        $this->assertSame(PictorialBarModeEnum::SCALED, $series->mode);
    }

    /**
     * @param string $key Series key under test.
     * @param string $label Series label under test.
     * @param array<int, mixed> $values
     * @param string $message Expected validation message.
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(
        string $key,
        string $label,
        array $values,
        string $message,
    ): void {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new PictorialBarSeriesData($key, $label, $values);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>, string}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => [
                'Visitors',
                'Visitors',
                [12],
                'Pictorial bar series key [Visitors] must use lowercase kebab-case.',
            ],
            'empty label' => [
                'visitors',
                ' ',
                [12],
                'Pictorial bar series label must not be empty.',
            ],
            'invalid value' => [
                'visitors',
                'Visitors',
                ['12'],
                'Pictorial bar series values must be non-negative numeric values or null.',
            ],
            'negative value' => [
                'visitors',
                'Visitors',
                [-1],
                'Pictorial bar series values must be non-negative numeric values or null.',
            ],
        ];
    }
}
