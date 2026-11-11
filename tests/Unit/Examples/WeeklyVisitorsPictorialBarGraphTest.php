<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Graphs\WeeklyVisitorsPictorialBarGraph;
use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../examples/WeeklyVisitorsPictorialBarGraph.php';

class WeeklyVisitorsPictorialBarGraphTest extends TestCase
{
    public function test_it_returns_repeated_weekly_visitor_symbols(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->atLeastOnce())
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $graph = new WeeklyVisitorsPictorialBarGraph($translator);

        $result = $graph->result(new GraphContextData(new User(), []))->toArray();

        $this->assertCount(7, $result['categories']);
        $this->assertSame('circle', $result['series'][0]['symbol']);
        $this->assertSame('repeated', $result['series'][0]['mode']);
        $this->assertSame([7, 9, 8, 11, 13, 16, 12], $result['series'][0]['values']);
    }
}
