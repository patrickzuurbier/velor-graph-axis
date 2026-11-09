<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit;

use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Tests\Fixtures\DefaultLineGraph;

class AbstractLineGraphTest extends TestCase
{
    public function test_it_provides_the_line_graph_type(): void
    {
        $graph = new DefaultLineGraph;

        $this->assertSame('axis.line', $graph->type());
    }
}
