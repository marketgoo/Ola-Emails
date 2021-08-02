const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-divider']
});

class OlaDivider extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        color: 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight)',
        margin: 'enum(none,small,normal)'
    };

    static defaultAttributes = {
        color: 'gray-xxlight',
        margin: 'normal'
    };

    render() {
        const color = tokens(this.getAttribute('color'));
        const margin = this.getAttribute('margin') === 'small' ? tokens('size-6') : this.getAttribute('margin') === 'normal' ? tokens('size-7') : "0";

        return `
        <p style="border-top:solid 4px ${color};font-size:1px;margin:${margin} auto;width:100%;">
        </p>
        `;
    }
}

module.exports = OlaDivider;
