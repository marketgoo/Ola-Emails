# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.4.0] - Unreleased
### Added
- New color `gray-xxlight`

### Changed
- The color `gray-xlight` is a bit darker.
- The default color of body is `gray-xxlight`.
- The default color of `OlaDivider` is `gray-xxlight`.

## [0.3.10] - 2021-08-02
### Changed
- Component `ola-divider` added margin attribute [#23]

## [0.3.9] - 2021-07-21
### Fixed
- Component `ola-table-cell` [#21]

## [0.3.8] - 2021-07-21
### Added
- Component `ola-table` [#20]
- Component `ola-table-row` [#20]
- Component `ola-table-cell` [#20]

## [0.3.7] - 2021-06-16
### Added
- Component `ola-issue` [#18]

### Removed
- Component `ola-task` [#18]

## [0.3.6] - 2021-02-01
### Fixed
- Component `ola-progress-bar` fixed border property [#17]

## [0.3.5] - 2021-02-01
### Changed
- Component `ola-progress-bar` added background-color attribute for disabled state [#16]

## [0.3.4] - 2021-01-15
### Fixed
- Component `ola-chart-column` added .join("") to the array of children to avoid comma and extra <td> [#15]

## [0.3.3] - 2021-01-05
### Changed
- Component `ola-head` added color classes [#14]

## [0.3.2] - 2020-12-23
### Changed
- Component `ola-kpi` changed styles and added variant attribute [#12]
- Component `ola-progress-bar` added disabled attribute [#12]
- Component `ola-item-list` added background-color attribute and changed some styles [#12]

## [0.3.1] - 2020-12-11
### Added
- New component `ola-kpi` [#10]

### Changed
- Component `ola-chart-column` allows multiple children into it [#11]

## [0.3.0] - 2020-12-03
### Added
- New component `ola-item-list` [#8]
- New component `ola-icon` [#8]
- New component `ola-circle` [#8]
- New component `ola-tag` [#8]
- New component `ola-score` [#8]
- New component `ola-progress-bar` [#8]
- New components `ola-chart-column` and `ola-chart-column-value` [#8]

## [0.2.1] - 2020-09-17
### Fixed
- CSS conflicts with `ola-button` component [#7]

## [0.2.0] - 2020-07-09
### Added
- New attribute `align` to `ola-panel-text` to align the text horizontally
- New component `ola-thumbnail` [#5]

### Changed
- `ola-counter` component structure. Now the component includes the title and description, not only the number.

### Fixed
- Default styles of `<ul>`

## [0.1.3] - 2020-07-08
### Changed
- Appearance of `ola-counter`: now it's smaller and with a shadow

### Fixed
- Button styles using component-specific tokens
- Spacing of `ola-divider`

## [0.1.2] - 2020-07-03
### Added
- New component `ola-divider`
- New component `ola-counter`

## [0.1.1] - 2020-05-08
### Removed
- mjmlconfig file

### Fixed
- Removed duplicated `<mj-column>` in `<ola-panel-text>`.
- The exit code of `bin.js` must be `1` on error

## 0.1.0 - 2020-04-23
First version

[#5]: https://github.com/marketgoo/Ola-Emails/issues/5
[#7]: https://github.com/marketgoo/Ola-Emails/issues/7
[#8]: https://github.com/marketgoo/Ola-Emails/issues/8
[#10]: https://github.com/marketgoo/Ola-Emails/issues/10
[#11]: https://github.com/marketgoo/Ola-Emails/issues/11
[#12]: https://github.com/marketgoo/Ola-Emails/issues/12
[#14]: https://github.com/marketgoo/Ola-Emails/issues/14
[#15]: https://github.com/marketgoo/Ola-Emails/issues/15
[#16]: https://github.com/marketgoo/Ola-Emails/issues/16
[#17]: https://github.com/marketgoo/Ola-Emails/issues/17
[#18]: https://github.com/marketgoo/Ola-Emails/issues/18
[#20]: https://github.com/marketgoo/Ola-Emails/issues/20
[#21]: https://github.com/marketgoo/Ola-Emails/issues/21
[#23]: https://github.com/marketgoo/Ola-Emails/issues/23

[0.4.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.10...v0.4.0
[0.3.10]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.9...v0.3.10
[0.3.9]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.8...v0.3.9
[0.3.8]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.7...v0.3.8
[0.3.7]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.6...v0.3.7
[0.3.6]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.5...v0.3.6
[0.3.5]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.4...v0.3.5
[0.3.4]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/marketgoo/Ola-Emails/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/marketgoo/Ola-Emails/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/marketgoo/Ola-Emails/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/marketgoo/Ola-Emails/compare/v0.1.0...v0.1.1
