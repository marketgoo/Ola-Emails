const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaDivider extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        color: 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight)',
    };

    static defaultAttributes = {
        color: 'gray-xxlight',
    };

    render() {
        const color = tokens(this.getAttribute('color'));
        const margin = tokens('size-7');
        return `
        <p style="border-top:solid 4px ${color};font-size:1px;margin:${margin} auto;width:100%;">
        </p>
        `;
    }
}

module.exports = OlaDivider;
