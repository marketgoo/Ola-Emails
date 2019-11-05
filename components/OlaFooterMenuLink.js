import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
    'ola-footer-menu': ['ola-footer-menu-link']
});

export default class OlaFooterMenuLink extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string'
    };

    static defaultAttributes = {
        href: '#'
    };

    render() {
        return this.renderMJML(`
      <mj-navbar-link ${this.htmlAttributes({
          href: this.getAttribute('href'),
          'css-class': 'ola_menu-link',
          'text-transform': 'none',
          'text-decoration': 'underline',
          color: tokens('gray'),
          padding: '4px 20px',
          'font-size': tokens('caption', 'font-size')
      })}
      >
        ${this.getContent()}
      </mj-navbar-link>
	`);
    }
}
