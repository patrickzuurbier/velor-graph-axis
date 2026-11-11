<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\BarGraphResultData;
use Velor\GraphAxis\Data\BarSeriesData;
use Velor\GraphAxis\Enums\BarOrientationEnum;
use Velor\GraphAxis\Enums\BarValueModeEnum;

class BarGraphResultDataTest extends TestCase
{
    public function test_it_serializes_bar_presentation_and_stacked_series(): void
    {
        $result = new BarGraphResultData(
            categories: ['January', 'February'],
            series: [
                new BarSeriesData('online', 'Online', [60, 55], 'sales'),
                new BarSeriesData('retail', 'Retail', [40, 45], 'sales'),
            ],
            orientation: BarOrientationEnum::HORIZONTAL,
            valueMode: BarValueModeEnum::PERCENTAGE,
        );

        $this->assertSame([
            'categories' => ['January', 'February'],
            'series'     => [
                [
                    'key'    => 'online',
                    'label'  => 'Online',
                    'values' => [60, 55],
                    'stack'  => 'sales',
                ],
                [
                    'key'    => 'retail',
                    'label'  => 'Retail',
                    'values' => [40, 45],
                    'stack'  => 'sales',
                ],
            ],
            'orientation' => 'horizontal',
            'valueMode'   => 'percentage',
        ], $result->toArray());
    }

    public function test_it_rejects_series_without_a_value_for_every_category(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Bar series [revenue] must contain one value for every category.');

        new BarGraphResultData(
            categories: ['January', 'February'],
            series: [new BarSeriesData('revenue', 'Revenue', [1200])],
        );
    }

    public function test_it_rejects_duplicate_series_keys(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Bar series key [revenue] is duplicated.');

        new BarGraphResultData(
            categories: ['January'],
            series: [
                new BarSeriesData('revenue', 'Revenue', [1200]),
                new BarSeriesData('revenue', 'Projected revenue', [1300]),
            ],
        );
    }

    public function test_it_rejects_percentage_values_outside_the_percentage_range(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Percentage bar series [share] values must be between 0 and 100.');

        new BarGraphResultData(
            categories: ['January'],
            series: [new BarSeriesData('share', 'Share', [101])],
            valueMode: BarValueModeEnum::PERCENTAGE,
        );
    }

    public function test_it_rejects_percentage_stacks_above_one_hundred(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Percentage bar stack [sales] must not exceed 100 per category.');

        new BarGraphResultData(
            categories: ['January'],
            series: [
                new BarSeriesData('online', 'Online', [60], 'sales'),
                new BarSeriesData('retail', 'Retail', [50], 'sales'),
            ],
            valueMode: BarValueModeEnum::PERCENTAGE,
        );
    }

    public function test_it_rejects_non_string_categories(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Bar graph categories must be strings.');

        new BarGraphResultData([1], []);
    }

    public function test_it_rejects_invalid_series_objects(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Bar graph series must contain BarSeriesData instances.');

        new BarGraphResultData([], [new \stdClass()]);
    }
}
