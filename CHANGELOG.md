# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] - 2023-07-03
### Changed
- Add new ola tokens

## [0.7.0] - 2023-04-05
### Added
- Added documentation [#36]

## [0.6.0] - 2023-04-03
### Changed
- Change default color of ola-button to brand color [#35]

## [0.5.0] - 2022-12-13
### Added
- Added brand-dark and brand-xdark colors into `ola-chart-column-value`.
- Added opacity attribute into `ola-chart-column-value`.

## [0.4.9] - 2022-12-09
### Added
- Added overlap attribute into `ola-panel`. [#34]

### Changed
- Changed padding `ola-button`. [#34]

## [0.4.8] - 2022-03-16
### Added
- Added size attribute into `ola-circle`. [#32]

## [0.4.7] - 2022-03-14
### Added
- Added width attribute into `ola-table-cell`. [#31]

## [0.4.6] - 2022-03-04
### Added
- Include padding attribute into `ola-table-cell`. [#30]

## [0.4.5] - 2022-02-25
### Fixed
- Allow align td's in `ola-table-cell`. [#29]

## [0.4.4] - 2021-12-16
### Fixed
- Aligned `ola-button` elements.

## [0.4.3] - 2021-12-16
### Fixed
- Removed property flex & align-items from `ola-button` component.

## [0.4.2] - 2021-12-16
### Fixed
- Fixed `padding` property to `ola-button` component when variant is `link`.

## [0.4.1] - 2021-12-14
### Fixed
- Added `height` attribute to `ola-text`  component. [#27]
- Removed `min-height` from `ola-wrapper` component. [#27]

## [0.4.0] - 2021-12-10
### Added
- New color `gray-xxlight`
- All attributes with values starting with `$` are replaced with the token real value.

### Changed
- The color `gray-xlight` is a bit darker.
- The default color of body is `gray-xxlight`.
- The default color of `OlaDivider` is `gray-xxlight`.

### Removed
- Component `ola-section`
- Component `ola-column`

## [0.3.13] - 2021-12-09
### Added
- Component `ola-wrapper` [#26]
- Component `ola-section` [#26]
- Component `ola-column` [#26]

### Changed
- Component `ola-button` to accept children [#26]

## [0.3.12] - 2021-08-11
### Added
- Added font-size to sup element in `ola-head` [#25]

## [0.3.11] - 2021-08-04
### Added
- New attribute `background-color` to `ola-table-cell` component [#24]
- New colors to `tokens-defaults.json` [#24]
- Color `gray-xxlight` to `background-color` from `ola-item-list` component [#24]

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

## [0.1.0] - 2020-04-23
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
[#24]: https://github.com/marketgoo/Ola-Emails/issues/24
[#25]: https://github.com/marketgoo/Ola-Emails/issues/25
[#26]: https://github.com/marketgoo/Ola-Emails/issues/26
[#27]: https://github.com/marketgoo/Ola-Emails/issues/27
[#29]: https://github.com/marketgoo/Ola-Emails/issues/29
[#30]: https://github.com/marketgoo/Ola-Emails/issues/30
[#31]: https://github.com/marketgoo/Ola-Emails/issues/31
[#32]: https://github.com/marketgoo/Ola-Emails/issues/32
[#34]: https://github.com/marketgoo/Ola-Emails/issues/34
[#35]: https://github.com/marketgoo/Ola-Emails/issues/35
[#36]: https://github.com/marketgoo/Ola-Emails/issues/36

[1.0.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.7.0...v1.0.0
[0.7.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.9...v0.5.0
[0.4.9]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.8...v0.4.9
[0.4.8]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.7...v0.4.8
[0.4.7]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.6...v0.4.7
[0.4.6]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.5...v0.4.6
[0.4.5]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.4...v0.4.5
[0.4.4]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/marketgoo/Ola-Emails/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.13...v0.4.0
[0.3.13]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.12...v0.3.13
[0.3.12]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.11...v0.3.12
[0.3.11]: https://github.com/marketgoo/Ola-Emails/compare/v0.3.10...v0.3.11
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
[0.1.0]: https://github.com/marketgoo/Ola-Emails/releases/tag/v0.1.0
