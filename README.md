# Renovate & PHP constraints

This repo exists to reproduce an issue with Renovate where the generated `composer update` command attempts to update some packages to versions which are not compatible with the PHP constraints in the project.

## Configuration

| Key | Value |
| `RENOVATE_GITHUB_COM_TOKEN` | `$GITHUB_COM_TOKEN` |
| `RENOVATE_TOKEN` | A Gitlab API token with role=Developer, scopes=api |
| `LOG_LEVEL` | `info` (less noisy) or `debug` |

## Notes

- Use [`renovate.json`](renovate.json) where possible for configuration.
- For configuration which should be retrieved from the environment, you can use `RENOVATE_CONFIG_FILE`.
- PR changes to a branch named `deps/configure`, which is Renovate's configuration branch.

Order of configuration appears to be:

1. `renovate.json` in the repo's default branch
2. `renovate.json` in `baseBranches` configuration
3. `config/renovate/config.js`
4. Environment variables (eg `RENOVATE_ADDITIONAL_BRANCH_PREFIX` for `additionalBranchPrefix` config option)

## References

- https://docs.renovatebot.com/configuration-options/
- https://gitlab.com/renovate-bot/renovate-runner
- https://www.velir.com/ideas/2022/10/20/how-to-automate-dependency-updates-with-renovate
- https://gitlab.com/renovate-bot/renovate-runner and [templates/renovate.gitlab-ci.yml](https://gitlab.com/renovate-bot/renovate-runner/-/blob/main/templates/renovate.gitlab-ci.yml?ref_type=heads) there
- https://www.lullabot.com/articles/managing-software-updates-hundreds-websites
- [renovatebot/renovate#35648: How does Renovate detect project's PHP version](https://github.com/renovatebot/renovate/discussions/35648)
