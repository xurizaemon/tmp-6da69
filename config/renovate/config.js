// Configuration from environment, prefer renovate.json where possible.
module.exports = {
  ...getPlatformConfig(),
};

function getPlatformConfig() {
  // Gitlab CI
  if (process.env.CI_API_V4_URL && process.env.CI_SERVER_HOST) {
    console.log('GitLab CI configuration');
    return {
      endpoint: process.env.CI_API_V4_URL,
      platform: 'gitlab',
      repositories: [process.env.CI_PROJECT_PATH],
    };
  }

  // Github Actions
  if (process.env.RENOVATE_CONFIG_FILE.match(/github/)) {
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
    repositories: [process.env.RENOVATE_REPOSITORY || 'default-repository'],
    token: process.env.RENOVATE_TOKEN,
  };
}
