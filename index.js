const core = require('@actions/core');
const collectStats = require('gh-action-stats');

function main() {
  console.log("gha-repo", process.env.GITHUB_ACTION_REPOSITORY);
  core.setOutput('dir-path', __dirname);
}

collectStats(main);
