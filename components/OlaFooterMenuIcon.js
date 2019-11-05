import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
  'ola-footer-menu': ['ola-footer-menu-icon'],
})

export default class OlaFooterMenuIcon extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'href': 'string',
    'src': 'string',
    'alt': 'string',
  }

  static defaultAttributes = {
    'href': '#'
  }

  getStyles() {
      return {
          img: {
              border: 0,
              display: 'block',
              outline: 'none',
              'text-decoration': 'none',
              width: '28px',
              height: '28px',
              padding: '0 8px'
          }
      }
  }

  render() {
    return this.renderMJML(`
        <mj-navbar-link ${this.htmlAttributes({
        href: this.getAttribute('href'),
        'css-class': 'ola_menu-link',
        'text-transform': 'none',
        'text-decoration': 'underline',
        color: tokens.gray,
        'font-size': tokens['font-caption']['font-size'],
        })}
        >
        <img ${this.htmlAttributes({
            src: this.getAttribute('src'),
            alt: this.getAttribute('alt'),
            style: 'img'
        })}>
        </mj-navbar-link>
    `)
  }
}
