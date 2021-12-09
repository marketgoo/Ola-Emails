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
        'border-radius': '0',
        'padding': '0'
    };

    headStyle() {
        return `
    .ola_highlight {
        min-height: 215px;
    }
    `;
    }

    render() {
        return this.renderMJML(`
            <mj-wrapper css-class="ola_highlight" padding=${this.getAttribute('padding')} border-radius=${this.getAttribute('border-radius')} background-color=${tokens(this.getAttribute('background-color'))}>
                ${this.getContent()}
            </mj-wrapper>
        `)
    }
}

module.exports = OlaHighlight;