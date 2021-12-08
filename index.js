const core = require('@actions/core');
const collectStats = require('gh-action-stats');

function main() {
  core.setOutput('dir-path', __dirname);
}

collectStats(main);
