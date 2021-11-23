# Get Actions Dir Path

Get the path for downloaded actions used for the workflow in the runner


## Outputs

`dir-path`: absolut path to the dir containing this action.

## Example Usage

```yaml
name: Get Path Test

on:
  push:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Get path
        id: get-path
        uses: michmich112/get-actions-dir-path@main
      - name: Display result
        run: | 
          echo "path -> $DIRPATH"
        env:
          DIRPATH: ${{ steps.get-path.outputs.dir-path }}

```
