const core = require("@actions/core");
const github = require("@actions/github");

try {
    const octo = github.getOctokit(core.getInput("token"));
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    octo.rest.actions.listWorkflowRuns({
        owner, repo,
        workflow_id: core.getInput("workflow_id"),
        status: "success",
        branch: core.getInput("branch"),
        per_page: 1
    }).then((res) => {
        const run_number = res.data.workflow_runs.length > 0
            ? res.data.workflow_runs[0].run_number : "";
        core.setOutput("run_number", run_number);
    }).catch((e) => {
        core.setFailed(e.message);
    });
} catch (e) {
    core.setFailed(e.message);
}