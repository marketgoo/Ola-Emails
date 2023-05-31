const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaCircle extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color':
            'enum(color-primary-500,color-white-100,color-neutral-900,color-neutral-700,color-neutral-400,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)',
        color: 'string',
        size: 'enum(small,medium,big)',
    };

    static defaultAttributes = {
        'background-color': 'color-neutral-700',
        color: 'color-white-100',
        size: 'big',
    };

    headStyle() {
        return `
    .ola_circle-number {
        width: ${tokens('size-5')};
        height: ${tokens('size-5')};
        padding: ${tokens('size-0')};
        margin: ${tokens('size-0')} 0 0;
    }
    .ola_circle-number sup {
        font-size: ${tokens('size-2')};
    }
    `;
    }

    render() {
        const size = this.getAttribute('size');
        const circleSize =
            {
                [size === 'small']: tokens('size-3'),
                [size === 'medium']: tokens('size-4'),
                [size === 'big']: tokens('size-5'),
            }[true] || null;
        const textSize =
            {
                [size === 'small']: 'font-0-regular',
                [size === 'medium']: 'font-1-regular',
                [size === 'big']: 'font-2-regular',
            }[true] || null;
        return `
    <table class="ola_circle" style="border-radius: 50%; background-color:${tokens(
        this.getAttribute('background-color')
    )};">
        <tr>
            <td class="ola_circle-number" style="width:${circleSize}; height:${circleSize}">
                ${this.renderMJML(`
                <ola-text ${this.htmlAttributes({
                    variant: `${textSize}`,
                    align: 'center',
                    color: this.getAttribute('color'),
                    'font-weight': 'font-weight-bold',
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
