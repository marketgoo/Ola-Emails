const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-hero': ['ola-button'],
    'mj-column': ['ola-button'],
    'ola-button': []
});

const styles = {
    default: {
        'border-radius': tokens('radius-big'),
        'font-weight': tokens('bold'),
        ...tokens.font('callout')
    },
    primary: {
        'background-color': tokens('accent'),
        color: tokens('white')
    },
    secondary: {
        color: tokens('brand'),
        'background-color': tokens('white'),
        border: `solid 1px ${tokens('gray-xlight')}`
    }
};

class OlaButton extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(primary,secondary)',
        href: 'string',
        align: 'enum(left,center,right)'
    };

    static defaultAttributes = {
        variant: 'secondary',
        align: 'center'
    };

    render() {
        const attributes = {
            ...styles.default,
            ...styles[this.getAttribute('variant')]
        };

        return this.renderMJML(`
			<mj-button
        ${this.htmlAttributes({
            href: this.getAttribute('href') || '#',
            align: this.getAttribute('align'),
            ...attributes
        })}
      >
        ${this.getContent()}
			</mj-button>
		`);
    }
}

module.exports = OlaButton;
