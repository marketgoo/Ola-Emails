const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaText extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(font-8-medium,font-5-medium,font-3-regular,font-2-regular,font-1-regular,font-0-regular)',
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
        const style = tokens(this.getAttribute('variant'));

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
