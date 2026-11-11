<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Graphs\MarketingReachScatterGraph;
use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../examples/MarketingReachScatterGraph.php';

class MarketingReachScatterGraphTest extends TestCase
{
    public function test_it_returns_multiple_bubble_series(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->atLeastOnce())
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $graph = new MarketingReachScatterGraph($translator);

        $result = $graph->result(new GraphContextData(new User(), []))->toArray();

        $this->assertCount(2, $result['series']);
        $this->assertCount(3, $result['series'][0]['points']);
        $this->assertSame(180, $result['series'][0]['points'][0]['size']);
        $this->assertSame('Spring campaign', $result['series'][0]['points'][0]['label']);
    }
}
