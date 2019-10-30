import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

module.exports = class OlaMenuItem extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'href': 'string'
  }

  render() {
    return this.renderMJML(`
      <mj-navbar-link ${this.htmlAttributes({
        href: this.getAttribute('href') || '#',
        'css-class': 'ola_menu-link',
        'text-transform': 'none',
        'text-decoration': 'underline',
        color: tokens.gray,
        'font-size': tokens['font-caption']['font-size'],
      })}
      >
        ${this.getContent()}
      </mj-navbar-link>
	`)
  }
}
