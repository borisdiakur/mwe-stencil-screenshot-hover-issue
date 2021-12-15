# MWE for Stencil screenshot diffing issue

The issue: It seems impossible to create a screenshot of a hover state.

Observation: as soon as the screenshot is made the hover state is unset.

How to reproduce:
1. Install dependencies 
2. Run `stencil test --e2e --screenshot`
3. Observe in chromium how the hover state is unset as soon as the screenshot is being made
4. Check the created image files in the screenshot directory (component should be red, but it's green)

Environment:
- @stencil/core: ^2.12.0
- node: v17.2.0
- OS: macOS Monterey 12.0.1
- Chip: Apple M1 Max
