const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaText extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(display,title,headline,body,callout,caption)',
        align: 'enum(left,center,right)',
        color: 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)',
        'vertical-align': 'enum(top,middle,bottom)',
        'font-weight': 'enum(regular,bold)',
        height: 'string'
    };

    static defaultAttributes = {
        variant: 'body',
        align: 'left',
        color: 'black',
    };

    render() {
        const style = tokens.font(this.getAttribute('variant'));

        if (!style['font-weight'] && this.getAttribute('font-weight')) {
            style['font-weight'] = this.getAttribute('font-weight') === 'bold' ? tokens('bold') : tokens('regular');
        }
        return this.renderMJML(`
			<mj-text
        ${this.htmlAttributes({
            ...style,
            height: this.getAttribute('height'),
            align: this.getAttribute('align'),
            color: tokens(this.getAttribute('color')),
            'vertical-align': this.getAttribute('vertical-align')
        })}
      >
        ${this.getContent()}
			</mj-text>
		`);
    }
}

module.exports = OlaText;
