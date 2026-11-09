<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\LineGraphResultData;
use Velor\GraphAxis\Data\LineSeriesData;

class LineGraphResultDataTest extends TestCase
{
    public function test_it_serializes_multiple_line_series(): void
    {
        $result = new LineGraphResultData(
            categories: ['January', 'February'],
            series: [
                new LineSeriesData('revenue', 'Revenue', [1200, 1450.5]),
                new LineSeriesData('costs', 'Costs', [800, null]),
            ],
        );

        $this->assertSame([
            'categories' => ['January', 'February'],
            'series' => [
                [
                    'key' => 'revenue',
                    'label' => 'Revenue',
                    'values' => [1200, 1450.5],
                ],
                [
                    'key' => 'costs',
                    'label' => 'Costs',
                    'values' => [800, null],
                ],
            ],
        ], $result->toArray());
    }

    public function test_it_rejects_series_without_a_value_for_every_category(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Line series [revenue] must contain one value for every category.');

        new LineGraphResultData(
            categories: ['January', 'February'],
            series: [new LineSeriesData('revenue', 'Revenue', [1200])],
        );
    }

    public function test_it_rejects_duplicate_series_keys(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Line series key [revenue] is duplicated.');

        new LineGraphResultData(
            categories: ['January'],
            series: [
                new LineSeriesData('revenue', 'Revenue', [1200]),
                new LineSeriesData('revenue', 'Projected revenue', [1300]),
            ],
        );
    }

    public function test_it_rejects_non_string_categories(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Line graph categories must be strings.');

        new LineGraphResultData([1], []);
    }

    public function test_it_rejects_invalid_series_values(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Line graph series must contain LineSeriesData instances.');

        new LineGraphResultData([], [new \stdClass]);
    }
}
