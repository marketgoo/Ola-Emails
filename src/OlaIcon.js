const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaIcon extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        icon: 'string',
        variant: 'enum(small,medium,big)'
    };

    static defaultAttributes = {
        variant: 'big'
    }

    render() {
        const variant = this.getAttribute('variant');
        const width = {
            [variant === "small"]: tokens('size-6'),
            [variant === "medium"]: tokens('size-7'),
            [variant === "big"]: tokens('size-8')
        }[true] || null;

        return `
                <table style="margin: auto">
                    <tr>
                        <td style="width:${width}" >
                            ${this.renderMJML(`<mj-image align="center" width=${width} src="${this.getAttribute('icon')}"></mj-image>`)}
                        <td/>
                    </tr>
                </table>
                `;
    }
}

module.exports = OlaIcon;