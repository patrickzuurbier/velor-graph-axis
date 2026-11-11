<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\PictorialBarGraphResultData;
use Velor\GraphAxis\Data\PictorialBarSeriesData;
use Velor\GraphAxis\Enums\BarOrientationEnum;
use Velor\GraphAxis\Enums\PictorialBarModeEnum;
use Velor\GraphAxis\Enums\PictorialBarSymbolEnum;

class PictorialBarGraphResultDataTest extends TestCase
{
    public function test_it_serializes_pictorial_bar_presentation(): void
    {
        $result = new PictorialBarGraphResultData(
            categories: ['Monday', 'Tuesday'],
            series: [
                new PictorialBarSeriesData(
                    'visitors',
                    'Visitors',
                    [7, 9],
                    PictorialBarSymbolEnum::DIAMOND,
                    PictorialBarModeEnum::REPEATED,
                ),
            ],
            orientation: BarOrientationEnum::HORIZONTAL,
        );

        $this->assertSame([
            'categories' => ['Monday', 'Tuesday'],
            'series'     => [[
                'key'    => 'visitors',
                'label'  => 'Visitors',
                'values' => [7, 9],
                'symbol' => 'diamond',
                'mode'   => 'repeated',
            ]],
            'orientation' => 'horizontal',
        ], $result->toArray());
    }

    public function test_it_rejects_series_without_a_value_for_every_category(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage(
            'Pictorial bar series [visitors] must contain one value for every category.',
        );

        new PictorialBarGraphResultData(
            categories: ['Monday', 'Tuesday'],
            series: [new PictorialBarSeriesData('visitors', 'Visitors', [7])],
        );
    }

    public function test_it_rejects_duplicate_series_keys(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Pictorial bar series key [visitors] is duplicated.');

        new PictorialBarGraphResultData(
            categories: ['Monday'],
            series: [
                new PictorialBarSeriesData('visitors', 'Visitors', [7]),
                new PictorialBarSeriesData('visitors', 'Expected visitors', [9]),
            ],
        );
    }

    public function test_it_rejects_non_string_categories(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Pictorial bar graph categories must be strings.');

        new PictorialBarGraphResultData([1], []);
    }

    public function test_it_rejects_invalid_series_objects(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage(
            'Pictorial bar graph series must contain PictorialBarSeriesData instances.',
        );

        new PictorialBarGraphResultData([], [new \stdClass()]);
    }
}
