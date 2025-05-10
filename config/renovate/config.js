// Configuration from environment, prefer renovate.json where possible.
module.exports = {
  endpoint: process.env.CI_API_V4_URL,
  platform: 'gitlab',
  repositories: [
    process.env.CI_PROJECT_PATH
  ],
};
