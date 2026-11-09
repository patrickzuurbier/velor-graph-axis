# Axis Graph Package Tests

These tests are intended to run inside a Velor CMS host application with this
package installed through the local package integration workflow.

The unit suite covers package contracts and data validation. The integration
suite boots the host application and verifies that Laravel package discovery
registers the package's graph types in the real core registry.
