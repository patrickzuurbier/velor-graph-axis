<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit;

use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Tests\Fixtures\DefaultBarGraph;

require_once __DIR__ . '/../Fixtures/DefaultBarGraph.php';

class AbstractBarGraphTest extends TestCase
{
    public function test_it_provides_the_bar_graph_type(): void
    {
        $graph = new DefaultBarGraph();

        $this->assertSame('axis.bar', $graph->type());
    }
}
