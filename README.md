# last-successful-run-number-action
This action returns the run number for the last successful run of a specified workflow.

## Inputs


| Name  | Required | Default | Description |
| ------------- | ------------- | ------------- | ------------- |
| token  | true  | n/a  | The GitHub access token  |
| branch  | false  | main  | The branch the workflow ran against  |
| workflow_id  | true  | n/a  | The id or filename of the workflow  |

## Outputs

| Name  |  Description |
| ------------- | ------------- |
| run_number  | The run number of the last successful workflow run.  | 

## Example usage

```
uses: nabil-hassan/last-successful-run-number-action@v1
with:
    token: <your-github-token>
    branch: main
    workflow: my-workflow
```