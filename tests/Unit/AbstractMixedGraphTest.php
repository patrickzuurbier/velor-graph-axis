<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit;

use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Tests\Fixtures\DefaultMixedGraph;

require_once __DIR__ . '/../Fixtures/DefaultMixedGraph.php';

class AbstractMixedGraphTest extends TestCase
{
    public function test_it_provides_the_mixed_graph_type(): void
    {
        $graph = new DefaultMixedGraph();

        $this->assertSame('axis.mixed', $graph->type());
    }
}
