<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Integration;

use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use Tests\Integration\AbstractIntegrationTestCase;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

class GraphAxisPackageTest extends AbstractIntegrationTestCase
{
    public function test_package_registers_the_line_graph_type(): void
    {
        $graphTypes = $this->app->make(GraphTypeRegistryInterface::class);
        $line = $graphTypes->find(LineGraphInterface::TYPE);

        $this->assertNotNull($line);
        $this->assertSame(1, $line->version);
        $this->assertSame(LineGraphInterface::class, $line->graphContract);
        $this->assertSame(LineGraphResultInterface::class, $line->resultContract);
    }
}
