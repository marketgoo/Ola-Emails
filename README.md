# Ola for emails

MJML implementation of **Ola** design system created by **marketgoo**.

## Install

```sh
npm i @marketgoo/ola-emails
```

## Usage

You can load the mjml code in three different ways:

```sh
ola-emails '<mjml>...</mjml>'
ola-emails --file 'email.mjml'
ola-emails < email.mjml
```

### Options

- `--theme`. The path of a json file with a theme tokens.
- `--validation`. Validation level (strict, soft or skip). `soft` by default
- `--file`. The file with the mjml code
- `--minify`. To minify the html output
- `--beautify`. To beautify the html output

### Example

```sh
ola-emails --theme=./my-theme.json --file email.mjml --minify > email.html
```
