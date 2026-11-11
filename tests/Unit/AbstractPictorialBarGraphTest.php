<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit;

use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Tests\Fixtures\DefaultPictorialBarGraph;

require_once __DIR__ . '/../Fixtures/DefaultPictorialBarGraph.php';

class AbstractPictorialBarGraphTest extends TestCase
{
    public function test_it_provides_the_pictorial_bar_graph_type(): void
    {
        $graph = new DefaultPictorialBarGraph();

        $this->assertSame('axis.pictorial-bar', $graph->type());
    }
}
