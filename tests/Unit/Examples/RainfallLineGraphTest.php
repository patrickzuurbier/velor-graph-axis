<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use App\Services\Graphs\Enums\GraphControlModeEnum;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Examples\RainfallLineGraph;

class RainfallLineGraphTest extends TestCase
{
    public function test_it_returns_two_series_for_the_selected_period(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->exactly(2))
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $graph = new RainfallLineGraph($translator);
        $context = new GraphContextData(new User(), ['period' => 'week']);

        $result = $graph->result($context)->toArray();

        $this->assertCount(7, $result['categories']);
        $this->assertCount(2, $result['series']);
        $this->assertSame('coastal-station', $result['series'][0]['key']);
        $this->assertSame('inland-station', $result['series'][1]['key']);
    }

    public function test_it_declares_server_and_client_controls_separately(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->exactly(7))
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $controls = (new RainfallLineGraph($translator))->controls();

        $this->assertSame('period', $controls[0]->key);
        $this->assertSame(GraphControlModeEnum::SERVER, $controls[0]->mode);
        $this->assertSame('scale', $controls[1]->key);
        $this->assertSame(GraphControlModeEnum::CLIENT, $controls[1]->mode);
    }
}
