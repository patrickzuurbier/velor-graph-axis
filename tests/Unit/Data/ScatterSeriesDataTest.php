<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use stdClass;
use Velor\GraphAxis\Data\ScatterPointData;
use Velor\GraphAxis\Data\ScatterSeriesData;

class ScatterSeriesDataTest extends TestCase
{
    public function test_it_serializes_scatter_points(): void
    {
        $series = new ScatterSeriesData('search', 'Search', [new ScatterPointData(12, 42)]);

        $this->assertSame([
            'key'    => 'search',
            'label'  => 'Search',
            'points' => [[
                'x'     => 12,
                'y'     => 42,
                'size'  => null,
                'label' => null,
            ]],
        ], $series->toArray());
    }

    /**
     * @param array<int, mixed> $points
     */
    #[DataProvider('invalidSeriesProvider')]
    public function test_it_rejects_invalid_series(
        string $key,
        string $label,
        array $points,
        string $message,
    ): void {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new ScatterSeriesData($key, $label, $points);
    }

    /**
     * @return array<string, array{string, string, array<int, mixed>, string}>
     */
    public static function invalidSeriesProvider(): array
    {
        return [
            'invalid key' => [
                'Search Results',
                'Search',
                [],
                'Scatter series key [Search Results] must use lowercase kebab-case.',
            ],
            'empty label'   => ['search', ' ', [], 'Scatter series label must not be empty.'],
            'invalid point' => [
                'search',
                'Search',
                [new stdClass()],
                'Scatter series points must contain ScatterPointData instances.',
            ],
        ];
    }
}
