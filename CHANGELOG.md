# Changelog

All notable changes to this project will be documented in this file.

## [1.1.14] - 2023-10-22

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.1.13] - 2023-10-19

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.1.12] - 2023-10-04

### Revert

- Bump @testing-library/jest-dom and @types/testing-library__jest-dom (#130)

## [1.1.11] - 2023-10-01

### Miscellaneous Tasks

- Update `cliff.toml` postprocessor patterns

## [1.1.10] - 2023-09-02

### Miscellaneous Tasks

- Add postprocessors to git cliff configs
- Update commit_preprocessors in git cliff config
- Add revert group to commit categorization
- Update commit grouping rules in `cliff.toml`

## [1.1.8] - 2023-09-02

### Refactor

- Add dynamic imports for LocaleSwitcher and ThemeSwitcher components
- Replace useState with useLocalStorage in theme switcher
- Update theme switcher component to improve theme state management

## [1.1.7] - 2023-08-28

### Miscellaneous Tasks

- Switched to CommonJS require in lingui.config

## [1.1.6] - 2023-08-28

### Refactor

- Update global font styling in Layout component
- Replace `useIsMounted` with `useMountedState` from react-use
- Remove unnecessary `useMountedState` from theme-switcher

### Miscellaneous Tasks

- Update script name in package.json
- Update pre-commit hook for more detailed Lingui extraction
- Update husky pre-commit hook for lingui extract
- Update Lingui config format settings
- Add webpack fallback configuration in `next.config.js`

## [1.1.5] - 2023-08-25

### Bug Fixes

- Update relative paths for Vazirmatn fonts

## [1.1.4] - 2023-08-25

### Refactor

- Update border thickness on switchers

## [1.1.3] - 2023-08-23

### Refactor

- Improve locale switcher styling
- Move font utility to styles directory

### Miscellaneous Tasks

- Add tailwind plugin recommendations for eslint
- Update pre-commit script for specific file types
- Update locales reference lines in `messages.po` files

## [1.1.2] - 2023-08-23

### Refactor

- Add `clsxm` method for style flexibility
- Update layout of Locale and Theme switchers
- Update styles in Locale Switcher for dark mode

### Miscellaneous Tasks

- Add cssnano to PostCSS config in production mode
- Update prettier config for better tailwind support
- Update line references in localization files
- Add organize attribute and jsdoc plugins to prettier configs

## [1.1.0] - 2023-08-21

### Features

- Add Light/Dark Theme Switch functionality

### Refactor

- Implement dark mode via Tailwind CSS classes
- Add index files and change functions to default exports
- Add ThemeSwitcher and updated color scheme for better visibility

## [1.0.24] - 2023-08-11

### Miscellaneous Tasks

- Update build workflow to control CI skip

## [1.0.23] - 2023-08-11

### Miscellaneous Tasks

- Update environment variable destination in build.yml

## [1.0.22] - 2023-08-11

### Miscellaneous Tasks

- Update build job condition in GitHub Actions

## [1.0.21] - 2023-08-11

### Miscellaneous Tasks

- Update GitHub Actions workflow to improve logging

## [1.0.20] - 2023-08-11

### Miscellaneous Tasks

- Update condition for Build & Test job in the workflow

## [1.0.19] - 2023-08-11

### Miscellaneous Tasks

- Add state verification to GitHub workflow

## [1.0.18] - 2023-08-11

### Miscellaneous Tasks

- Add initial commit check to build workflow
- Add linting for json and yaml files
- Update pre-commit hook and cleanup package.json scripts

## [1.0.17] - 2023-08-11

### Miscellaneous Tasks

- Update pnpm install command in workflow template
- Remove usage guard from build workflow

## [1.0.16] - 2023-08-11

### Miscellaneous Tasks

- Add Vazirmatn font license
- Remove unused SVG files

## [1.0.15] - 2023-08-11

### Refactor

- Add `Vazirmatn` font and configuration
- Add layout structure and modularize font implementation

## [1.0.14] - 2023-08-11

### Miscellaneous Tasks

- Add husky install to `prepare` script in `package.json`
- Add `pre-commit` hook to run tests
- Add `lint-staged` to project dependencies
- Add `lint-staged` to scripts in `package.json`
- Add `lint-staged` config and update `pre-commit` hook

## [1.0.11] - 2023-07-30

### Miscellaneous Tasks

- Update pnpm commands in `template` workflows
- Cdd README.md to `template` workflows
- Update and enhance `template` workflow

## [1.0.10] - 2023-07-30

### Miscellaneous Tasks

- Add `v` prefix to release tag and title in build workflow
- Add `typesync` step to `preinstall` script
- Update ESLint related packages for better type compatibility

## [1.0.9] - 2023-07-30

### Miscellaneous Tasks

- Add descriptive job names to github workflow

## [1.0.8] - 2023-07-30

### Testing

- Add tests for the Home page component

### Miscellaneous Tasks

- Refactor format and readability in `template` workflow
- Add `.swc` files to `.gitignore`
- Add `jest.config.js` for test configuration
- Add Jest testing script to `package.json`
- Update build workflow steps and comments
- Merge release and build workflows

## [1.0.7] - 2023-07-29

### Miscellaneous Tasks

- Update workflow template for clarity

## [1.0.6] - 2023-07-29

### Miscellaneous Tasks

- Add GitHub Actions workflow for initial template cleanup

## [1.0.5] - 2023-07-28

### Bug Fixes

- Remove close function from locale switcher component

### Refactor

- Improve code formatting and remove unused import
- Simplify locale switching logic in `useLocaleSwitcher`

## [1.0.4] - 2023-07-28

### Features

- Add Turkish language support to Lingui config

### Refactor

- Update code formatting for readability
- Update locale page to adhere to syntax standards
- Add Turkish localization and translation
- Simplify locale detection and broaden usability

## [1.0.3] - 2023-07-28

### Miscellaneous Tasks

- Add usage guard to `build` workflow

## [1.0.1] - 2023-07-24

### Documentation

- Update issue templates with default titles

## [1.0.0] - 2023-07-23

### Miscellaneous Tasks

- Update github release action version

## [1.0.0-beta.6] - 2023-07-23

### Miscellaneous Tasks

- Refactor comments and update action in release workflow

## [1.0.0-beta.5] - 2023-07-21

### Miscellaneous Tasks

- Update release notes formatting in GitHub workflow

## [1.0.0-beta.4] - 2023-07-21

### Miscellaneous Tasks

- Remove escape sequence replacements in release workflow

## [1.0.0-beta.3] - 2023-07-21

### Documentation

- Add GitHub issue templates and disable blank issues

### Miscellaneous Tasks

- Add stale bot configuration file
- Improve release notes generation in the workflow

## [1.0.0-beta.2] - 2023-07-21

### Bug Fixes

- Add page title and update locale files
- Implement `useLingui` hook for proper translation rendering`

### Refactor

- Improve code readability with proper spacing

## [1.0.0-beta.1] - 2023-07-21

### Documentation

- Update project references from `starter` to `template`

## [1.0.0-alpha.6] - 2023-07-21

### Documentation

- Update README with SSG emphasis

## [1.0.0-alpha.5] - 2023-07-21

### Features

- Add locale switcher and necessary dependencies
- Implement dynamic direction and language updates

### Refactor

- Update homepage content and translations
- Replace Inter font with `Vazirmatn` in homepage
- Move localization initialization into its own hook
- Add locale direction and name utilities
- Move locale determination to separate hook
- Update code for consistency in space usage

### Documentation

- Create a LICENSE file for repository (#14)
- Update README to reflect multi-lingual site construction

### Miscellaneous Tasks

- Update Prettier command in `package.json`
- Add Lingui files to `.gitignore`
- Update localization files and add new translation

## [1.0.0-alpha.4] - 2023-07-21

### Refactor

- Update `getStaticProps` and `getStaticPaths` functions
- Update `locales` module for code consistency
- Update code for better readability and consistency

### Documentation

- Remove unnecessary whitespace from README

### Miscellaneous Tasks

- Update lingui configuration
- Add Prettier and its plugins for code formatting
- Add `prettier.config.js` for unified formatting
- Add Prettier to ESLint configuration
- Add `.prettierignore` file to exclude unnecessary directories and files from formatting
- Standardize quotes in YAML files
- Update config files for consistent quote usage
- Add prettier `format` script to `package.json`

## [1.0.0-alpha.3] - 2023-07-21

### Miscellaneous Tasks

- Adjust line numbers for locale translations

## [1.0.0-alpha.2] - 2023-07-21

### Miscellaneous Tasks

- Update release workflow for clarity and information
- Add GitHub Actions build workflow

## [1.0.0-alpha.1] - 2023-07-21

### Miscellaneous Tasks

- Update checkout step in GitHub Actions
- Remove dependency ignore in `dependabot.yml` config file

## [1.0.0-alpha.0] - 2023-07-20

### Features

- Update start script to use `serve` instead
- Add LinguiJS for i18n and update dependencies

### Bug Fixes

- Update next.config.js to set output to `export`
- Update `next.config.js` to disable the Image Optimization API
- Remove unused hello api route

### Refactor

- Add localization utility functions
- Add localization support to app
- Add support for multilingual interface

### Documentation

- Simplify README and remove unnecessary instructions

### Miscellaneous Tasks

- Enable `pre-post-scripts` and add `prestart` command
- Add localization files for Farsi, English, and Arabic
- Add missing metadata to locale files and automate extraction
- Add GitHub action for automatic releases
- Add dependabot configuration file
- Add funding information to GitHub repository

<!-- generated by git-cliff -->
