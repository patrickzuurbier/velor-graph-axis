<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use stdClass;
use Velor\GraphAxis\Data\ScatterGraphResultData;
use Velor\GraphAxis\Data\ScatterPointData;
use Velor\GraphAxis\Data\ScatterSeriesData;

class ScatterGraphResultDataTest extends TestCase
{
    public function test_it_serializes_series_and_axis_labels(): void
    {
        $result = new ScatterGraphResultData(
            series: [new ScatterSeriesData('search', 'Search', [new ScatterPointData(12, 42)])],
            xAxisLabel: 'Budget',
            yAxisLabel: 'Reach',
        );

        $this->assertSame('Budget', $result->toArray()['xAxisLabel']);
        $this->assertSame('Reach', $result->toArray()['yAxisLabel']);
        $this->assertSame('search', $result->toArray()['series'][0]['key']);
    }

    public function test_it_rejects_duplicate_series_keys(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Scatter series key [search] is duplicated.');

        new ScatterGraphResultData([
            new ScatterSeriesData('search', 'Search', []),
            new ScatterSeriesData('search', 'Other search', []),
        ]);
    }

    public function test_it_rejects_invalid_series_objects(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Scatter graph series must contain ScatterSeriesData instances.');

        new ScatterGraphResultData([new stdClass()]);
    }

    public function test_it_rejects_empty_axis_labels(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Scatter axis labels must not be empty when provided.');

        new ScatterGraphResultData([], xAxisLabel: ' ');
    }
}
