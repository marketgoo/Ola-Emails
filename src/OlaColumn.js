const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaColumn extends BodyComponent {

    static endingTag = true;

    static allowedAttributes = {
        'padding': 'string',
        'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)',
        'border-radius': 'string'
    };

    static defaultAttributes = {
        'padding': '0'
    };

    render() {
        return this.renderMJML(`
            <mj-column css-class="ola_column" padding=${this.getAttribute('padding')} inner-background-color=${tokens(this.getAttribute('background-color'))} inner-border-radius=${this.getAttribute('border-radius')}>
                ${this.getContent()}
            </mj-column>
        `)
    }
}

module.exports = OlaColumn;