<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Graphs\MonthlyPerformanceMixedGraph;
use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../examples/MonthlyPerformanceMixedGraph.php';

class MonthlyPerformanceMixedGraphTest extends TestCase
{
    public function test_it_returns_stacked_bars_and_a_secondary_line(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->atLeastOnce())
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $graph = new MonthlyPerformanceMixedGraph($translator);

        $result = $graph->result(new GraphContextData(new User(), []))->toArray();

        $this->assertCount(6, $result['categories']);
        $this->assertCount(3, $result['series']);
        $this->assertSame('visitors', $result['series'][0]['stack']);
        $this->assertSame('bar', $result['series'][1]['type']);
        $this->assertSame('line', $result['series'][2]['type']);
        $this->assertSame('secondary', $result['series'][2]['axis']);
    }
}
