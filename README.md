# Velor Graph Axis

Axis graph types for Velor CMS. The package provides renderer-neutral PHP
contracts and lazy Apache ECharts adapters for line, bar, pictorial bar, and
scatter graphs with one or multiple series.

## Requirements

- PHP `^8.4.1`
- Velor CMS `^1.22`

## Installation

Require the package in a compatible Velor CMS application:

```bash
composer require patrickzuurbier/velor-graph-axis
npm run build
```

Laravel package discovery registers `GraphAxisServiceProvider`. The provider
adds the version 1 `axis.line`, `axis.bar`, `axis.pictorial-bar`, and
`axis.scatter` graph types to Velor's graph-type registry.
The package includes its compiled renderer assets; consuming applications do
not install ECharts or package-specific npm dependencies themselves.

## Creating A Line Graph

Generate a line graph:

```bash
php artisan velor:make:graph MonthlySalesGraph --type=axis.line
```

The command creates `app/Graphs/MonthlySalesGraph.php` with its stable key,
title, line result contract, and an initial series. Line graphs extend
`AbstractLineGraph` and define their data through the result method:

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

## Creating A Bar Graph

Generate a bar graph:

```bash
php artisan velor:make:graph QuarterlySalesGraph --type=axis.bar
```

Bar graphs extend `AbstractBarGraph`. Their result defines categories, series,
orientation, and value mode:

```php
namespace App\Graphs;

use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\AbstractBarGraph;
use Velor\GraphAxis\Contracts\BarGraphResultInterface;
use Velor\GraphAxis\Data\BarGraphResultData;
use Velor\GraphAxis\Data\BarSeriesData;
use Velor\GraphAxis\Enums\BarOrientationEnum;

class QuarterlySalesGraph extends AbstractBarGraph
{
    public function key(): string
    {
        return 'quarterly-sales';
    }

    public function title(): string
    {
        return 'Quarterly sales';
    }

    public function result(GraphContextInterface $context): BarGraphResultInterface
    {
        return new BarGraphResultData(
            categories: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                new BarSeriesData('online', 'Online', [82, 91, 104, 118]),
                new BarSeriesData('retail', 'Retail', [64, 72, 69, 81]),
            ],
            orientation: BarOrientationEnum::VERTICAL,
        );
    }
}
```

## Creating A Pictorial Bar Graph

Generate a pictorial bar graph:

```bash
php artisan velor:make:graph WeeklyVisitorsGraph --type=axis.pictorial-bar
```

Pictorial bar graphs extend `AbstractPictorialBarGraph`. Select a predefined
symbol and choose whether it scales as one shape or repeats along the value
axis:

```php
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\PictorialBarGraphResultInterface;
use Velor\GraphAxis\Data\PictorialBarGraphResultData;
use Velor\GraphAxis\Data\PictorialBarSeriesData;
use Velor\GraphAxis\Enums\BarOrientationEnum;
use Velor\GraphAxis\Enums\PictorialBarModeEnum;
use Velor\GraphAxis\Enums\PictorialBarSymbolEnum;

public function result(GraphContextInterface $context): PictorialBarGraphResultInterface
{
    return new PictorialBarGraphResultData(
        categories: ['Monday', 'Tuesday', 'Wednesday'],
        series: [
            new PictorialBarSeriesData(
                'visitors',
                'Visitors',
                [7, 9, 8],
                symbol: PictorialBarSymbolEnum::CIRCLE,
                mode: PictorialBarModeEnum::REPEATED,
            ),
        ],
        orientation: BarOrientationEnum::VERTICAL,
    );
}
```

Available symbols are `ARROW`, `CIRCLE`, `DIAMOND`, `PIN`, `RECTANGLE`,
`ROUNDED_RECTANGLE`, and `TRIANGLE`. `SCALED` renders one shape per value;
`REPEATED` fills the value with clipped repeated shapes. Pictorial values must be
non-negative.

## Creating A Scatter Graph

Generate a scatter graph:

```bash
php artisan velor:make:graph MarketingReachGraph --type=axis.scatter
```

Scatter graphs extend `AbstractScatterGraph`. Every point has numeric `x` and
`y` coordinates. Add an optional non-negative size to produce bubbles and an
optional label to identify an individual point:

```php
use App\Services\Graphs\Contracts\GraphContextInterface;
use Velor\GraphAxis\Contracts\ScatterGraphResultInterface;
use Velor\GraphAxis\Data\ScatterGraphResultData;
use Velor\GraphAxis\Data\ScatterPointData;
use Velor\GraphAxis\Data\ScatterSeriesData;

public function result(GraphContextInterface $context): ScatterGraphResultInterface
{
    return new ScatterGraphResultData(
        series: [
            new ScatterSeriesData('search', 'Search', [
                new ScatterPointData(12, 42, 180, 'Spring campaign'),
                new ScatterPointData(19, 58, 260, 'Summer campaign'),
            ]),
            new ScatterSeriesData('social', 'Social', [
                new ScatterPointData(9, 34),
                new ScatterPointData(17, 49),
            ]),
        ],
        xAxisLabel: 'Budget',
        yAxisLabel: 'Reach',
    );
}
```

Bubble sizes are compared across every series in the result and mapped to a
consistent visual range. Points without a size use the regular scatter marker.
Axis labels are optional.

## Optional Description And Controls

Axis graph base classes provide no description and no controls by default.
Override `description()` to show supporting text below the graph title:

```php
public function description(): ?string
{
    return 'Monthly revenue and costs.';
}
```

Override `controls()` to declare selectable options:

```php
use App\Services\Graphs\Data\GraphControlData;
use App\Services\Graphs\Data\GraphControlOptionData;
use App\Services\Graphs\Enums\GraphControlModeEnum;

public function controls(): array
{
    return [
        new GraphControlData(
            key: 'period',
            label: 'Period',
            options: [
                new GraphControlOptionData('month', 'Month'),
                new GraphControlOptionData('year', 'Year'),
            ],
            defaultValue: 'month',
            mode: GraphControlModeEnum::SERVER,
        ),
        new GraphControlData(
            key: 'scale',
            label: 'Scale',
            options: [
                new GraphControlOptionData('linear', 'Linear'),
                new GraphControlOptionData('logarithmic', 'Logarithmic'),
            ],
            defaultValue: 'linear',
            mode: GraphControlModeEnum::CLIENT,
        ),
    ];
}
```

`SERVER` controls refresh only the affected graph and are available in
`result()` through `$context->control('period')`. `CLIENT` controls reuse the
current result and change only its presentation. The line renderer supports
`scale` as a client control with `linear` and `logarithmic` values. See the
publishable Rainfall example for a complete implementation.

## Line Result Contract

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

## Bar Result Contract

`BarGraphResultData` uses the same ordered category and series structure. Each
`BarSeriesData` additionally accepts an optional lowercase kebab-case `stack`
key. Series without a stack are grouped; series with the same stack key are
stacked.

`BarOrientationEnum::VERTICAL` places categories on the horizontal axis.
`BarOrientationEnum::HORIZONTAL` places categories on the vertical axis.

The default `BarValueModeEnum::VALUE` displays numeric values. Use
`BarValueModeEnum::PERCENTAGE` for percentage bars. Percentage values are
explicit graph data between `0` and `100`; Velor does not silently normalize
raw measurements. Combine percentage mode with a shared stack key for a
percentage-stacked presentation. A percentage stack cannot exceed `100` within
one category.

## Pictorial Bar Result Contract

`PictorialBarGraphResultData` contains ordered categories, one or more
`PictorialBarSeriesData` instances, and a `BarOrientationEnum`. Every series
contains one non-negative numeric or `null` value per category, a
`PictorialBarSymbolEnum`, and a `PictorialBarModeEnum`. Series keys remain
unique lowercase kebab-case identifiers.

## Scatter Result Contract

`ScatterGraphResultData` contains one or more uniquely keyed
`ScatterSeriesData` instances and optional horizontal and vertical axis labels.
Each series contains `ScatterPointData` instances with numeric coordinates, an
optional non-negative bubble value, and an optional non-empty point label. A
plain scatter graph omits point sizes; a bubble graph supplies them. Both use
the same `axis.scatter` type and lazy chart module.

## Renderer Loading

The package registers small `axis.line`, `axis.bar`, `axis.pictorial-bar`, and
`axis.scatter` entrypoints with Velor's frontend renderer registry. Each
concrete renderer loads asynchronously only when its graph type is present. The
package build imports ECharts core, `LineChart`, `BarChart`,
`PictorialBarChart`, `ScatterChart`, grid, legend, tooltip, and
`CanvasRenderer`; each chart module remains in its own lazy chunk.

The line renderer supports multiple series and recognizes an optional
client-side `scale` control with `linear` and `logarithmic` values. Server-side
controls continue to refresh only the affected graph card.

The package provides:

- `LineGraphInterface` and `AbstractLineGraph`;
- `LineGraphResultInterface`;
- validated multi-series line result DTOs;
- `BarGraphInterface`, `AbstractBarGraph`, and validated bar result DTOs;
- vertical, horizontal, grouped, stacked, and percentage bar presentations;
- pictorial bars with predefined scaled or repeated symbols;
- scatter and bubble graphs with multiple series, optional point labels, and
  optional axis labels;
- automatic registration of `axis.line`, `axis.bar`, `axis.pictorial-bar`, and
  `axis.scatter`;
- lazy multi-series line, bar, pictorial bar, and scatter renderers;
- linear and logarithmic presentation scales.

Graph placement and authenticated data endpoints remain core concerns. Custom
graph classes only declare controls and return the package result contract.

## Example Graphs

Publish the translated, multi-series Rainfall example into `app/Graphs` with:

```bash
php artisan velor:graph:example:publish axis.rainfall-line
```

The published class behaves like every other application graph and is not
placed automatically. After removing its dashboard or resource placements,
remove an unchanged published copy with:

```bash
php artisan velor:graph:example:remove axis.rainfall-line
```

The removal command preserves a modified copy.

Publish or remove the stacked Quarterly Sales bar example with:

```bash
php artisan velor:graph:example:publish axis.quarterly-sales-bar
php artisan velor:graph:example:remove axis.quarterly-sales-bar
```

Publish or remove the repeated-symbol Weekly Visitors example with:

```bash
php artisan velor:graph:example:publish axis.weekly-visitors-pictorial-bar
php artisan velor:graph:example:remove axis.weekly-visitors-pictorial-bar
```

Publish or remove the multi-series Marketing Reach bubble example with:

```bash
php artisan velor:graph:example:publish axis.marketing-reach-scatter
php artisan velor:graph:example:remove axis.marketing-reach-scatter
```

## Package Development

Install and compile the package-owned frontend dependencies with:

```bash
npm ci
npm test
npm run typecheck
npm run build
```

The generated `dist` assets are part of the Composer distribution. Rebuild them
whenever renderer source or frontend dependencies change.

The build also synchronizes the applicable third-party license and notice texts
into `licenses/`. See `THIRD_PARTY_NOTICES.md` for the included dependencies,
versions, and license identifiers.

## Testing

Package tests run inside a compatible Velor CMS host application with the
package installed through the local package integration workflow.
