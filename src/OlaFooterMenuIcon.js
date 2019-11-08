const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

registerDependencies({
    'ola-footer-menu': ['ola-footer-menu-icon']
});

class OlaFooterMenuIcon extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string',
        src: 'string',
        alt: 'string'
    };

    static defaultAttributes = {
        href: '#'
    };

    getStyles() {
        return {
            img: {
                border: 0,
                display: 'block',
                outline: 'none',
                width: tokens('size-6'),
                height: tokens('size-6'),
                padding: tokens('size-3')
            }
        };
    }

    render() {
        return this.renderMJML(`
        <ola-footer-menu-link ${this.htmlAttributes({ href: this.getAttribute('href') })}>
        <img ${this.htmlAttributes({
            src: this.getAttribute('src'),
            alt: this.getAttribute('alt'),
            style: 'img'
        })}>
        </ola-footer-menu-link>
    `);
    }
}

module.exports = OlaFooterMenuIcon;
