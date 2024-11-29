# @moodagent/common
Reusable UI components created by the Moodagent web devs.

## Install

```bash
npm i @moodagent/common
```

## Development

### Install, build and pack

```
npm i && npm run build && npm pack
```

### Including the local distribution in the consuming package

```
npm uninstall @moodagent/common && npm install ../web_common/moodagent-common-<version>.tgz
```

### Branches

Name      | Purpose            | Flow
--------- | ------------------ | -------------------
master    | latest development | readonly
feature/* | new features       | merge to master

### Releasing a new version

1. Run `npm version patch | minor | major` on master.
2. Push the automatically created commit.
3. Go to Bitbucket pipelines and publish the new version.
4. After the new version is published, the Jira board should be updated.
5. Write a message informing the team about the new release. The message should be added to #web_dev channel on Slack.
For the patch version the message can be skipped.

**Major** releases contain breaking changes for the applications, so it should be discussed in the team when and what to publish.

**Minor** releases contain new features to the already existing components or new components.

**Patch** releases contain bug fixes and PRs connected to Storybook.

## Pull Requests
If the pull request is introducing a breaking change, the PR title should be prefixed with `[BREAKING CHANGE]`.
These PRs should be reviewed but not merged into master, it will be taking in consideration when we are discussing the major releases.

## moodagentTheme
moodagentTheme is a common theme used across web projects.

Import common moodagentTheme and add additional theme properties as follows:

```typescript
import {createTheme} from '@mui/material/styles';
import {moodagentTheme} from '@moodagent/common';

export const theme = createTheme({
	...moodagentTheme,
	sizing: {
		...moodagentTheme.sizing,
		topBar: {
			height: '88px',
		},
	},
});

export default theme;
```

## Storybook

The Storybook is deployed at https://storybook.moodagent.net

Run Storybook locally:

`npm run storybook`
