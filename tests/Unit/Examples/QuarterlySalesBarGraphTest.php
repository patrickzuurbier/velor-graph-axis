<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Examples;

use App\Graphs\QuarterlySalesBarGraph;
use App\Models\User;
use App\Services\Graphs\Data\GraphContextData;
use Illuminate\Contracts\Translation\Translator;
use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../../../examples/QuarterlySalesBarGraph.php';

class QuarterlySalesBarGraphTest extends TestCase
{
    public function test_it_returns_stacked_quarterly_sales_series(): void
    {
        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($this->atLeastOnce())
            ->method('get')
            ->willReturnCallback(static fn (string $key): string => $key);
        $graph = new QuarterlySalesBarGraph($translator);

        $result = $graph->result(new GraphContextData(new User(), []))->toArray();

        $this->assertSame(['Q1', 'Q2', 'Q3', 'Q4'], $result['categories']);
        $this->assertSame('sales', $result['series'][0]['stack']);
        $this->assertSame('sales', $result['series'][1]['stack']);
        $this->assertSame([82, 91, 104, 118], $result['series'][0]['values']);
    }
}
