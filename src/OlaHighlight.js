const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaHighlight extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)',
        'padding': 'string',
        'border-radius': 'string'
    };

    static defaultAttributes = {
        'background-color': 'gray-xxlight',
        'border-radius': '0',
        'padding': '0'
    };

    headStyle() {
        return `
    .ola_highlight {
        min-width: 234px;
        min-height: 215px;
        margin: 16px !important;
    }
    `;
    }

    render() {
        return this.renderMJML(`
                <mj-section ${this.htmlAttributes({
                    'css-class': 'ola_highlight',
                    'background-color': tokens(this.getAttribute('background-color')),
                    'padding': this.getAttribute('padding'),
                    'border-radius': this.getAttribute('border-radius')
                })}>
                    ${this.getContent()}
                </mj-section>
            `)}
}

module.exports = OlaHighlight;