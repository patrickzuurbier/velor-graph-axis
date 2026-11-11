<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Graphs\RainfallLineGraph;
use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use App\Services\Graphs\Enums\GraphControlModeEnum;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../examples/RainfallLineGraph.php';

class RainfallLineGraphTest extends TestCase
{
    #[DataProvider('periodProvider')]
    public function test_it_returns_two_series_for_the_selected_period(
        string $period,
        int $categoryCount,
        string $firstCategory,
        int $firstCoastalValue,
    ): void {
        $graph = new RainfallLineGraph($this->translator());
        $context = new GraphContextData(new User(), ['period' => $period]);

        $result = $graph->result($context)->toArray();

        $this->assertCount($categoryCount, $result['categories']);
        $this->assertSame($firstCategory, $result['categories'][0]);
        $this->assertCount(2, $result['series']);
        $this->assertSame('coastal-station', $result['series'][0]['key']);
        $this->assertSame($firstCoastalValue, $result['series'][0]['values'][0]);
        $this->assertSame('inland-station', $result['series'][1]['key']);
    }

    public function test_it_declares_period_and_scale_controls(): void
    {
        $controls = (new RainfallLineGraph($this->translator()))->controls();

        $this->assertCount(2, $controls);
        $this->assertSame('period', $controls[0]->key);
        $this->assertSame('month', $controls[0]->defaultValue);
        $this->assertSame(GraphControlModeEnum::SERVER, $controls[0]->mode);
        $this->assertSame(['week', 'month', 'year'], array_column($controls[0]->options, 'value'));
        $this->assertSame('scale', $controls[1]->key);
        $this->assertSame('linear', $controls[1]->defaultValue);
        $this->assertSame(GraphControlModeEnum::CLIENT, $controls[1]->mode);
        $this->assertSame(['linear', 'logarithmic'], array_column($controls[1]->options, 'value'));
    }

    public function test_it_declares_translated_presentation_copy(): void
    {
        $graph = new RainfallLineGraph($this->translator());

        $this->assertSame('velor-graph-axis::graphs.rainfall.title', $graph->title());
        $this->assertSame('velor-graph-axis::graphs.rainfall.description', $graph->description());
    }

    /**
     * @return array<string, array{string, int, string, int}>
     */
    public static function periodProvider(): array
    {
        return [
            'week'  => ['week', 7, 'Mon', 8],
            'month' => ['month', 12, 'Jan', 82],
            'year'  => ['year', 5, '2022', 912],
        ];
    }

    protected function translator(): Translator
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->atLeastOnce())
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);

        return $translator;
    }
}
