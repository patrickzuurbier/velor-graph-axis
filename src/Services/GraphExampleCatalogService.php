<?php

declare(strict_types=1);

namespace Velor\GraphAxis\Services;

use Velor\GraphAxis\Data\GraphExampleData;

class GraphExampleCatalogService
{
    /**
     * @return array<int, GraphExampleData>
     */
    public function all(): array
    {
        $packagePath = dirname(__DIR__, 2);

        return [
            new GraphExampleData(
                key: 'quarterly-sales-bar-example',
                source: $packagePath . '/examples/QuarterlySalesBarGraph.php',
                target: 'QuarterlySalesBarGraph.php',
            ),
            new GraphExampleData(
                key: 'rainfall-line-example',
                source: $packagePath . '/examples/RainfallLineGraph.php',
                target: 'RainfallLineGraph.php',
            ),
            new GraphExampleData(
                key: 'monthly-performance-mixed-example',
                source: $packagePath . '/examples/MonthlyPerformanceMixedGraph.php',
                target: 'MonthlyPerformanceMixedGraph.php',
            ),
            new GraphExampleData(
                key: 'weekly-visitors-pictorial-bar-example',
                source: $packagePath . '/examples/WeeklyVisitorsPictorialBarGraph.php',
                target: 'WeeklyVisitorsPictorialBarGraph.php',
            ),
            new GraphExampleData(
                key: 'marketing-reach-scatter-example',
                source: $packagePath . '/examples/MarketingReachScatterGraph.php',
                target: 'MarketingReachScatterGraph.php',
            ),
        ];
    }

    public function find(string $key): ?GraphExampleData
    {
        foreach ($this->all() as $example) {
            if ($example->key === $key) {
                return $example;
            }
        }

        return null;
    }
}
