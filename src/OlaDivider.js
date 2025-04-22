const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-divider'],
});

class OlaDivider extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        color: 'enum(color-primary-500,color-white,color-neutral-900,color-neutral-700,color-neutral-400,color-neutral-200,color-neutral-100)',
        margin: 'enum(none,extra-small,smaller,small,normal)',
    };

    static defaultAttributes = {
        color: 'color-neutral-100',
        margin: 'normal',
    };

    render() {
        const color = tokens(this.getAttribute('color'));
        const marginType = this.getAttribute('margin');
        let margin = '0';

        switch (marginType) {
            case 'extra-small':
                margin = tokens('size-1');
                break;
            case 'smaller':
                margin = tokens('size-2');
                break;
            case 'small':
                margin = tokens('size-3');
                break;
            case 'normal':
                margin = tokens('size-4');
                break;
        }

        return `
        <p style="border-top:solid 4px ${color};font-size:1px;margin:${margin} auto;width:100%;">
        </p>
        `;
    }
}

module.exports = OlaDivider;
