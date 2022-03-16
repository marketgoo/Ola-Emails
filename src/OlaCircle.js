const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaCircle extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)',
        'color': 'string',
        'variant': 'enum(small,medium,big)'
    };

    static defaultAttributes = {
        'background-color': 'gray',
        'color': 'white',
        'variant': 'big'
    };

    headStyle() {
        return `
    .ola_circle-number {
        width: ${tokens('size-8')};
        height: ${tokens('size-8')};
        padding: ${tokens('size-2')};
        margin: ${tokens('size-2')} 0 0;
    }
    .ola_circle-number sup {
        font-size: ${tokens('size-4')};
    }
    `;
    }

    render() {
        const variant = this.getAttribute('variant');
        const size = {
            [variant === "small"]: tokens('size-6'),
            [variant === "medium"]: tokens('size-7'),
            [variant === "big"]: tokens('size-8')
        }[true] || null;
        const textVariant = {
            [variant === "small"]: 'caption',
            [variant === "medium"]: 'callout',
            [variant === "big"]: 'body'
        }[true] || null;
        return `
    <table class="ola_circle" style="border-radius: 50%; background-color:${tokens(this.getAttribute('background-color'))};">
        <tr>
            <td class="ola_circle-number" style="width:${size}; height:${size}">
                ${this.renderMJML(`
                <ola-text ${this.htmlAttributes({
            'variant': `${textVariant}`,
            'align': 'center',
            'color': this.getAttribute('color'),
            'font-weight': 'bold'
        })}>
                ${this.getContent()}
                </ola-text>
                `)}
            <td/>
        </tr>
    </table>
    `;
    }
}

module.exports = OlaCircle;