const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-hero': ['ola-button'],
    'mj-column': ['ola-button'],
    'ola-button': [],
});

const styles = {
    default: {
        'border-radius': tokens('radius-big'),
        'font-weight': tokens('bold'),
        ...tokens.font('callout'),
    },
    primary: {
        'background-color': tokens('button', 'primary', 'background') || tokens('accent'),
        color: tokens('button', 'primary', 'color') || tokens('white'),
    },
    secondary: {
        'background-color': tokens('button', 'primary', 'background') || tokens('white'),
        color: tokens('button', 'secondary', 'color') || tokens('brand'),
        border: `solid 1px ${tokens('button', 'secondary', 'border') || tokens('gray-xlight')}`,
    },
};

class OlaButton extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(primary,secondary)',
        href: 'string',
        align: 'enum(left,center,right)',
    };

    static defaultAttributes = {
        variant: 'secondary',
        align: 'center',
    };

    render() {
        const attributes = {
            ...styles.default,
            ...styles[this.getAttribute('variant')],
        };

        return this.renderMJML(`
			<mj-button
        ${this.htmlAttributes({
            href: this.getAttribute('href') || '#',
            align: this.getAttribute('align'),
            'css-class': 'ola_button-' + this.getAttribute('variant'),
            ...(tokens('button', '@css') || {}),
            ...(tokens('button', '@css', this.getAttribute('variant')) || {}),
            ...attributes,
        })}>
        ${this.getContent()}
			</mj-button>
		`);
    }
}

module.exports = OlaButton;

function toCss(css, selector, props) {
    if (!props) {
        return;
    }

    css.push(`${selector} {`);

    for (const [key, value] of Object.entries(props)) {
        css.push(`  ${key}: ${value} !important;`);
    }
    css.push(`}`);
}