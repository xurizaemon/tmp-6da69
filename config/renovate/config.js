// Configuration from environment, prefer renovate.json where possible.
module.exports = {
  ...getPlatformConfig(),
  repositories: [process.env.RENOVATE_REPOSITORIES || process.env.CI_PROJECT_PATH || 'default-repo'],
};

function getPlatformConfig() {
  // Gitlab CI
  if (process.env.CI_API_V4_URL && process.env.CI_SERVER_HOST) {
    console.log('GitLab CI configuration');
    return {
      platform: 'gitlab',
      endpoint: process.env.CI_API_V4_URL,
    };
  }

  // Github Actions
  if (process.env.GITHUB_ACTIONS) {
    console.log('GitHub Actions configuration');
    return {
      platform: 'github',
      repositories: [process.env.GITHUB_REPOSITORY],
    };
  }

  // Fallback
  console.log('Fallback configuration');
  return {
    platform: process.env.RENOVATE_PLATFORM || 'github',
    token: process.env.RENOVATE_TOKEN,
  };
}
