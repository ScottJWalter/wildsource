# Contributing to WildSource

Thanks for helping. There are two ways to contribute.

## 1. Submit a stream

Open a **Stream submission** issue and fill in the template. Before you submit, check that the stream meets the [submission rules](docs/submission-rules.md): nature subjects only, no identifiable people, no private property, and no precise locations for nests or at-risk species.

## 2. Contribute code

### Setup

```bash
npm install
npm run dev
```

Run checks before opening a pull request:

```bash
npm run lint
npm run typecheck
```

### Workflow

1. Find or open an issue. Comment that you want to work on it.
2. Fork the repo and create a branch: `git checkout -b fix/short-description`.
3. Keep changes focused. One pull request should do one thing.
4. Open a pull request and fill in the template.
5. A maintainer will review it. We aim to respond within a few days.

### Commit messages

Short, imperative, present tense: `Add stream health check`. No special format required.

## Ground rules

- Be kind. Follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- Do not commit secrets, API keys or personal data.
- Do not add streams or images you do not have the right to share.
- By contributing, you agree that your work is licensed under the project's [MIT license](LICENSE).
