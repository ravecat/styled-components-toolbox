module.exports = {
  types: [
    {
      value: "build",
      name: "build: Build a project or change external dependencies"
    },
    { value: "ci", name: "ci: Configuring CI and working with scripts" },
    { value: "docs", name: "docs: Updating docs" },
    { value: "feat", name: "feat: Adding new functionality" },
    { value: "fix", name: "fix: Fix bugs" },
    {
      value: "perf",
      name: "perf: Optimixe perfomance"
    },
    {
      value: "refactor",
      name: "refactor: Editing the code without correcting bugs or adding new features"
    },
    { value: "revert", name: "revert: Rollback to previous commits " },
    {
      value: "style",
      name:  "style: Updating according to style guide (tabs, indents, points, commas, etc)"
    },
    { value: "test", name: "test: Adding tests" }
  ],

  scopes: [
    { name: 'components' },
    { name: 'containers' },
    { name: 'localization' },
    { name: 'selectors' },
    { name: 'middlewares' },
  ],
  messages: {
    type: "What changes do you make?",
    scope: "Select the SCOPE, which you changed (optional):",
    customScope: "Set custom SCOPE (optional):",
    subject: "Write a short description:",
    body: 'Write detailed description (optional). Use "|" for a new line:',
    footer: "Meta data (tickets, links, etc). Example: SECRETMRKT-800:",
    confirmCommit: "Are you satisfied with the resulting commit?"
  },
  allowCustomScopes: true,
  allowBreakingChanges: false,
  footerPrefix: "META:",
  subjectLimit: 72
};

