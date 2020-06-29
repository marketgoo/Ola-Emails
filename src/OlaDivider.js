const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaDivider extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        color: 'enum(brand,white,black,gray,gray-light,gray-xlight)',
    };

    static defaultAttributes = {
        color: 'gray-xlight',
    };

    render() {
        return this.renderMJML(`
			<mj-divider
        ${this.htmlAttributes({
            'border-color': tokens(this.getAttribute('color')),
        })}
      >
			</mj-divider>
		`);
    }
}

module.exports = OlaDivider;
