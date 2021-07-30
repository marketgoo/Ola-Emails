const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaDivider extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        color: 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight)',
        margin: 'enum(0,1,2,3,4,5,6,7)'
    };

    static defaultAttributes = {
        color: 'gray-xxlight',
        margin: '7'
    };

    render() {
        const color = tokens(this.getAttribute('color'));
        const margin = this.getAttribute('margin') === "0" ? "0" : tokens(`size-${this.getAttribute('margin')}`);
        return `
        <p style="border-top:solid 4px ${color};font-size:1px;margin:${margin} auto;width:100%;">
        </p>
        `;
    }
}

module.exports = OlaDivider;
