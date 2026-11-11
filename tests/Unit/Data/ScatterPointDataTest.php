<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Data;

use InvalidArgumentException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Data\ScatterPointData;

class ScatterPointDataTest extends TestCase
{
    public function test_it_serializes_a_bubble_point(): void
    {
        $point = new ScatterPointData(12, 42.5, 180, 'Spring campaign');

        $this->assertSame([
            'x'     => 12,
            'y'     => 42.5,
            'size'  => 180,
            'label' => 'Spring campaign',
        ], $point->toArray());
    }

    /**
     * @param int|float|null $size
     */
    #[DataProvider('invalidPointProvider')]
    public function test_it_rejects_invalid_point_options(
        int|float|null $size,
        ?string $label,
        string $message,
    ): void {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage($message);

        new ScatterPointData(1, 2, $size, $label);
    }

    /**
     * @return array<string, array{int|float|null, string|null, string}>
     */
    public static function invalidPointProvider(): array
    {
        return [
            'negative size' => [-1, null, 'Scatter point size must be non-negative or null.'],
            'empty label'   => [null, ' ', 'Scatter point label must not be empty when provided.'],
        ];
    }
}
