const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaWrapper extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'padding': 'string'
    };

    static defaultAttributes = {
        'padding': '0'
    };

    headStyle() {
        return `
    .ola_wrapper {
        min-height: 215px;
    }
    `;
    }

    render() {
        return this.renderMJML(`
            <mj-wrapper css-class="ola_wrapper" padding=${this.getAttribute('padding')}>
                ${this.getContent()}
            </mj-wrapper>
        `)
    }
}

module.exports = OlaWrapper;