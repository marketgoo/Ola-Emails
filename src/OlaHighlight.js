const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaHighlight extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)',
        'padding': 'string',
        'outer-padding': 'string',
        'border-radius': 'string'
    };

    static defaultAttributes = {
        'background-color': 'gray-xxlight',
        'border-radius': '0',
        'padding': '0',
        'outer-padding': '0'
    };

    headStyle() {
        return `
    .ola_highlight-section {
        min-height: 215px;
    }

    `;
    }

    render() {
        return this.renderMJML(`
            <mj-wrapper css-class="ola_highlight" padding=${this.getAttribute('outer-padding')}>
                <mj-section css-class="ola_highlight-section" padding=${this.getAttribute('padding')} background-color=${tokens(this.getAttribute('background-color'))} border-radius=${this.getAttribute('border-radius')}>
                    ${this.getContent()}
                </mj-section>
            </mj-wrapper>
        `)
    }
}

module.exports = OlaHighlight;