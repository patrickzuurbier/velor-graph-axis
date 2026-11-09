# Velor Graph Axis

Axis graph types for Velor CMS. The package initially provides the PHP contract
and renderer-neutral result model for line graphs with one or multiple series.

## Requirements

- PHP `^8.4.1`
- Velor CMS `^1.22`

## Installation

Require the package in a compatible Velor CMS application:

```bash
composer require patrickzuurbier/velor-graph-axis
```

Laravel package discovery registers `GraphAxisServiceProvider`. The provider
adds the version 1 `axis.line` graph type to Velor's graph-type registry.

## Creating A Line Graph

Application graphs live below `app/Graphs`. Extend `AbstractLineGraph` to reuse
the common `axis.line` type while retaining full control over data access:

```php
namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractLineGraph;
use Velor\GraphAxis\Contracts\LineGraphResultInterface;
use Velor\GraphAxis\Data\LineGraphResultData;
use Velor\GraphAxis\Data\LineSeriesData;

class MonthlySalesGraph extends AbstractLineGraph
{
    public function key(): string
    {
        return 'monthly-sales';
    }

    public function title(): string
    {
        return 'Monthly sales';
    }

    public function result(GraphContextInterface $context): LineGraphResultInterface
    {
        return new LineGraphResultData(
            categories: ['January', 'February', 'March'],
            series: [
                new LineSeriesData('revenue', 'Revenue', [1200, 1450, 1600]),
                new LineSeriesData('costs', 'Costs', [800, 925, 1000]),
            ],
        );
    }
}
```

A graph may use constructor-injected repositories or services, Eloquent,
Laravel's query builder, an external API, or another suitable data source. The
package constrains the returned result, not how values are calculated.

## Result Contract

`LineGraphResultData` contains ordered category labels and ordered line series.
Every series contains exactly one numeric or `null` value for every category:

```php
[
    'categories' => ['January', 'February'],
    'series' => [
        [
            'key' => 'revenue',
            'label' => 'Revenue',
            'values' => [1200, 1450.5],
        ],
        [
            'key' => 'costs',
            'label' => 'Costs',
            'values' => [800, null],
        ],
    ],
]
```

Series keys use lowercase kebab-case and must be unique within one result.
Labels are presentational. A `null` value represents a missing measurement and
is distinct from numeric zero.

The result contains no ECharts configuration. Velor's frontend adapter maps
this stable package schema to the installed renderer.

## Current Scope

This initial package slice provides:

- `LineGraphInterface` and `AbstractLineGraph`;
- `LineGraphResultInterface`;
- validated multi-series line result DTOs;
- automatic registration of `axis.line`.

Frontend rendering, graph controls, dashboard placement, and authenticated data
endpoints are added through the wider Velor graph integration rather than by
custom graph classes.

## Testing

Package tests run inside a compatible Velor CMS host application with the
package installed through the local package integration workflow.
