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

### Example

```sh
ola-emails --theme=./my-theme.json --file email.mjml > email.html
```

### Documentation

Documentation page is available [https://marketgoo.github.io/Ola-Emails/docs.html](here)

You can document your new components (or edits) in the `docs.js` file at the root of project.

As you can see, there is a json with all of the components. The schema of each object is:

* name: Name of component. Example OlaIcon
* tag: Tag of component: Example ola-icon
* attr: What attributes are avaibable in this component, with their types and allowed/default values.
* parent: The tag name of the parent, if has.
* subcomponents: Array with the tags of it children, if has.
* example: An example of implementation of this componnent.