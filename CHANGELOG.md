# Changelog

All notable changes to Velor Graph Axis will be documented in this file.

This project follows semantic versioning: `MAJOR.MINOR.PATCH`.

## [Unreleased]

### Added

- Added the `axis.line` graph type, line graph contract, reusable abstract line
  graph, and validated renderer-neutral result DTOs for one or multiple series.
- Added a lazy, package-owned Apache ECharts renderer for multi-series line
  graphs with linear and logarithmic presentation scales.
- Added package-owned `axis.line` generation and a translated Rainfall example
  with safe publication and removal through the Velor CMS graph commands.
- Added the `axis.bar` graph type with vertical, horizontal, grouped, stacked,
  and percentage presentations, a lazy renderer, package-owned generation, and
  a translated publishable Quarterly Sales example.
