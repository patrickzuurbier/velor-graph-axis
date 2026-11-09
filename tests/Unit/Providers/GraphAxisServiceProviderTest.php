<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Tests\Unit\Providers;

use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use App\Services\Graphs\Data\GraphTypeData;
use Illuminate\Contracts\Foundation\Application;
use PHPUnit\Framework\TestCase;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Providers\GraphAxisServiceProvider;

class GraphAxisServiceProviderTest extends TestCase
{
    public function test_it_registers_the_line_graph_type(): void
    {
        $graphTypes = $this->createMock(GraphTypeRegistryInterface::class);
        $graphTypes
            ->expects($this->once())
            ->method('register')
            ->with($this->callback(static function (GraphTypeData $type): bool {
                self::assertSame('axis.line', $type->key);
                self::assertSame(1, $type->version);
                self::assertSame(LineGraphInterface::class, $type->graphContract);
                self::assertSame(LineGraphResultInterface::class, $type->resultContract);

                return true;
            }));
        $provider = new GraphAxisServiceProvider($this->createStub(Application::class));

        $provider->boot($graphTypes);
    }
}
