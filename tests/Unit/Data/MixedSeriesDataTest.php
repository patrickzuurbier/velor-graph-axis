<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\MixedSeriesData;
use Velor\GraphAxis\Enums\MixedSeriesTypeEnum;
use Velor\GraphAxis\Enums\MixedValueAxisEnum;

class MixedSeriesDataTest extends TestCase
{
    public function test_it_serializes_a_secondary_line_series(): void
    {
        $series = new MixedSeriesData(
            'conversion',
            'Conversion',
            [3.2, null],
            MixedSeriesTypeEnum::LINE,
            MixedValueAxisEnum::SECONDARY,
        );

        $this->assertSame([
            'key'    => 'conversion',
            'label'  => 'Conversion',
            'values' => [3.2, null],
            'type'   => 'line',
            'axis'   => 'secondary',
            'stack'  => null,
        ], $series->toArray());
    }

    /**
     * @param array<int, mixed> $values
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(
        string $key,
        string $label,
        array $values,
        MixedSeriesTypeEnum $type,
        ?string $stack,
        string $message,
    ): void {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new MixedSeriesData($key, $label, $values, $type, stack: $stack);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>, MixedSeriesTypeEnum, string|null, string}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => [
                'Conversion Rate',
                'Conversion',
                [3.2],
                MixedSeriesTypeEnum::LINE,
                null,
                'Mixed series key [Conversion Rate] must use lowercase kebab-case.',
            ],
            'empty label' => [
                'conversion',
                ' ',
                [3.2],
                MixedSeriesTypeEnum::LINE,
                null,
                'Mixed series label must not be empty.',
            ],
            'invalid value' => [
                'conversion',
                'Conversion',
                ['3.2'],
                MixedSeriesTypeEnum::LINE,
                null,
                'Mixed series values must be numeric or null.',
            ],
            'invalid stack' => [
                'visitors',
                'Visitors',
                [1200],
                MixedSeriesTypeEnum::BAR,
                'Visitor Stack',
                'Mixed series stack [Visitor Stack] must use lowercase kebab-case.',
            ],
            'line stack' => [
                'conversion',
                'Conversion',
                [3.2],
                MixedSeriesTypeEnum::LINE,
                'conversion',
                'Only mixed bar series may declare a stack.',
            ],
        ];
    }
}
