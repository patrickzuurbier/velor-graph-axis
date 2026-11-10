<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Providers;

use App\Services\Graphs\Contracts\GraphTypeRegistryInterface;
use App\Services\Graphs\Data\GraphTypeData;
use Illuminate\Support\ServiceProvider;
use Velor\GraphAxis\Contracts\LineGraphInterface;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;

class GraphAxisServiceProvider extends ServiceProvider
{
    public function boot(GraphTypeRegistryInterface $graphTypes): void
    {
        $this->loadTranslationsFrom(__DIR__ . '/../../lang', 'velor-graph-axis');

        $graphTypes->register(new GraphTypeData(
            key: LineGraphInterface::TYPE,
            version: 1,
            graphContract: LineGraphInterface::class,
            resultContract: LineGraphResultInterface::class,
        ));
    }
}
