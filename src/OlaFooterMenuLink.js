const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-footer-menu': ['ola-footer-menu-link']
});

class OlaFooterMenuLink extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string'
    };

    static defaultAttributes = {
        href: '#'
    };

    render() {
        return this.renderMJML(`
      <mj-navbar-link
          href="${this.getAttribute('href')}"
          css-class="ola_menu-link"
          text-transform="none"
          text-decoration="underline"
          color="${tokens('gray')}"
          padding="4px 20px"
          font-size="${tokens.font('caption', 'font-size')}"
      >
        ${this.getContent()}
      </mj-navbar-link>
	`);
    }
}

module.exports = OlaFooterMenuLink;
