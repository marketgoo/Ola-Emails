const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-wrapper': ['ola-card-header'],
});

class OlaCardHeader extends BodyComponent {
    static endingTag = false;

    static allowedAttributes = {
        src: 'string',
        text: 'string',
        'icon-width': 'string',
        color: 'string',
    };

    static defaultAttributes = {
        'icon-width': '24px',
        color: 'color-neutral-500',
    };

    render() {
        return this.renderMJML(`
            <mj-section padding="0 0 15px 0">
                <mj-column width="20%" vertical-align="middle">
                    <mj-image width="${this.getAttribute('icon-width')}" padding="0" src="${this.getAttribute('src')}" />
                </mj-column>
                <mj-column width="80%" vertical-align="middle">
                    <ola-text variant="font-1-regular" color="${this.getAttribute('color')}">${this.getAttribute('text')}</ola-text>
                </mj-column>
            </mj-section>
        `);
    }
}

module.exports = OlaCardHeader;
