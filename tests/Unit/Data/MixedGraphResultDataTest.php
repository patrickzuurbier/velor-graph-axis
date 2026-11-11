<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use stdClass;
use Velor\GraphAxis\Data\MixedGraphResultData;
use Velor\GraphAxis\Data\MixedSeriesData;
use Velor\GraphAxis\Enums\MixedSeriesTypeEnum;

class MixedGraphResultDataTest extends TestCase
{
    public function test_it_serializes_categories_series_and_axis_labels(): void
    {
        $result = new MixedGraphResultData(
            categories: ['January'],
            series: [new MixedSeriesData('visitors', 'Visitors', [1200], MixedSeriesTypeEnum::BAR)],
            primaryAxisLabel: 'Visitors',
            secondaryAxisLabel: 'Conversion (%)',
        );

        $this->assertSame(['January'], $result->toArray()['categories']);
        $this->assertSame('visitors', $result->toArray()['series'][0]['key']);
        $this->assertSame('Visitors', $result->toArray()['primaryAxisLabel']);
        $this->assertSame('Conversion (%)', $result->toArray()['secondaryAxisLabel']);
    }

    public function test_it_rejects_series_without_a_value_for_every_category(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Mixed series [visitors] must contain one value for every category.');

        new MixedGraphResultData(
            ['January', 'February'],
            [new MixedSeriesData('visitors', 'Visitors', [1200], MixedSeriesTypeEnum::BAR)],
        );
    }

    public function test_it_rejects_duplicate_series_keys(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Mixed series key [visitors] is duplicated.');

        new MixedGraphResultData(
            ['January'],
            [
                new MixedSeriesData('visitors', 'Visitors', [1200], MixedSeriesTypeEnum::BAR),
                new MixedSeriesData('visitors', 'Other visitors', [800], MixedSeriesTypeEnum::BAR),
            ],
        );
    }

    public function test_it_rejects_non_string_categories(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Mixed graph categories must be strings.');

        new MixedGraphResultData([1], []);
    }

    public function test_it_rejects_invalid_series_objects(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Mixed graph series must contain MixedSeriesData instances.');

        new MixedGraphResultData([], [new stdClass()]);
    }

    public function test_it_rejects_empty_axis_labels(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Mixed graph axis labels must not be empty when provided.');

        new MixedGraphResultData([], [], secondaryAxisLabel: ' ');
    }
}
