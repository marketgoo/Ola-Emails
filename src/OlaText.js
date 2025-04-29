const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaText extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant:
            'enum(font-8-medium,font-5-medium, font-4-medium,font-3-regular,font-2-regular,font-1-regular,font-0-regular)',
        align: 'enum(left,center,right)',
        color: 'enum(color-primary-500,color-white,color-neutral-900,color-neutral-700,color-neutral-400,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)',
        'vertical-align': 'enum(top,middle,bottom)',
        'font-weight': 'enum(font-weight-regular,font-weight-bold)',
        height: 'string',
    };

    static defaultAttributes = {
        variant: 'font-2-regular',
        align: 'left',
        color: 'color-neutral-900',
    };

    render() {
        const variant = this.getAttribute('variant');
        let style = tokens(variant);

        // Aseguramos que style tenga todas las propiedades necesarias
        style = {
            'font-family': (style && style['font-family']) || tokens('font-family-1'),
            'font-size': (style && style['font-size']) || '16px',
            'line-height': (style && style['line-height']) || '24px',
            'letter-spacing': (style && style['letter-spacing']) || '0',
            'font-weight': (style && style['font-weight']) || tokens('font-weight-regular')
        };

        if (this.getAttribute('font-weight')) {
            style['font-weight'] =
                this.getAttribute('font-weight') === 'font-weight-bold'
                    ? tokens('font-weight-bold')
                    : tokens('font-weight-regular');
        }

        return this.renderMJML(`
            <mj-text
                ${this.htmlAttributes({
                    ...style,
                    height: this.getAttribute('height'),
                    align: this.getAttribute('align'),
                    color: tokens(this.getAttribute('color')),
                    'vertical-align': this.getAttribute('vertical-align'),
                })}
            >
                ${this.getContent()}
            </mj-text>
        `);
    }
}

module.exports = OlaText;
