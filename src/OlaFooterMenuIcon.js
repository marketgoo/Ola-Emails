const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-footer-menu': ['ola-footer-menu-icon'],
});

class OlaFooterMenuIcon extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string',
        src: 'string',
        alt: 'string',
    };

    static defaultAttributes = {
        href: '#',
    };

    render() {
        return this.renderMJML(`
        <ola-footer-menu-link href=${this.getAttribute('href')}">
            <img
              src="${this.getAttribute('src')}"
              alt="${this.getAttribute('alt')}"
              width="${tokens('size-4')}"
              height="${tokens('size-4')}"
              padding="0"
              border="0"
              style="outline:none;font-8-medium:block"
            >
        </ola-footer-menu-link>
    `);
    }
}

module.exports = OlaFooterMenuIcon;
