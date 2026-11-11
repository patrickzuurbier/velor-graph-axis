<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit;

use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Tests\Fixtures\DefaultScatterGraph;

require_once __DIR__ . '/../Fixtures/DefaultScatterGraph.php';

class AbstractScatterGraphTest extends TestCase
{
    public function test_it_provides_the_scatter_graph_type(): void
    {
        $graph = new DefaultScatterGraph();

        $this->assertSame('axis.scatter', $graph->type());
    }
}
