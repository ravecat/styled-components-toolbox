module.exports = {
  // Set a required branch value for debugging mode
  branch: "master",
  tagFormat: "${version}",
  preset: "angular",
  plugins: [
    ["@semantic-release/commit-analyzer", {
      releaseRules: [
        { type: "docs", release: "patch" },
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
      },
    }],    
    ["@semantic-release/release-notes-generator", {
      parserOpts: {
        referenceActions: ['META'],
      },
      writerOpts: {
        commitsSort: ["subject", "scope"],
      }
    }],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: "build(release): ${nextRelease.version}\n${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }\n\n${nextRelease.notes}",
      },
    ]
  ]
}
