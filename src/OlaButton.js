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
        padding: 0,
        'border-radius': tokens('radius-xl'),
        'font-weight': tokens('font-weight-bold'),
        ...tokens('font-1-regular'),
    },
    primary: {
        'background-color': tokens('button', 'primary', 'background') || tokens('color-accent-500'),
        color: tokens('button', 'primary', 'color') || tokens('color-white-100'),
    },
    secondary: {
        'background-color': tokens('button', 'primary', 'background') || tokens('color-white-100'),
        color: tokens('button', 'secondary', 'color') || tokens('color-primary-500'),
        border: `solid 1px ${tokens('button', 'secondary', 'border') || tokens('color-primary-500')}`,
    },
    link: {
        'background-color': tokens('button', 'primary', 'background') || 'transparent',
        color: tokens('button', 'primary', 'color') || tokens('color-primary-500'),
        border: 'none',
        'border-radius': '0',
        'font-weight': tokens('font-weight-regular'),
    },
};

class OlaButton extends BodyComponent {
    static allowedAttributes = {
        variant: 'enum(primary,secondary,link)',
        href: 'string',
        align: 'enum(left,center,right)',
    };

    static defaultAttributes = {
        variant: 'secondary',
        align: 'center',
    };

    headStyle() {
        return `
        .ola_button-link {
            padding: 0 !important;
        }
        .ola_button-link a {
            padding: 0 !important;
            display: inline;
        }
        .ola_button-link span:first-child {
            padding-right: 10px;
            vertical-align: super;
        }
        .ola_button-link span:nth-child(2) div {
            display: inline;
        }
    `;
    }

    render() {
        const attributes = {
            ...styles.default,
            ...styles[this.getAttribute('variant')],
        };

        const { children } = this.props;
        const render_children = children.length > 0;

        return this.renderMJML(`
                        <mj-column css-class="ola_button-${this.getAttribute('variant')}">
                            <mj-button ${this.htmlAttributes({
                                href: this.getAttribute('href') || '#',
                                align: this.getAttribute('align'),
                                'css-class': 'ola_button-' + this.getAttribute('variant'),
                                ...(tokens('button', '@css') || {}),
                                ...(tokens('button', '@css', this.getAttribute('variant')) || {}),
                                ...attributes,
                            })}>
                                        <span>${this.getContent()}</span>
                                        ${render_children ? `<span>${this.renderChildren()}</span>` : ''}
                            </mj-button>
                        </mj-column>
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
