const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

// registerDependencies({
//     'ola-panel': ['ola-tag'],
// });

const styles = {
    default: {
        'border-radius': tokens('radius-small'),
        'font-weight': tokens('bold'),
        'background-color': tokens('gray-xlight'),
        'color': tokens('black'),
        'display': 'inline-flex',
        'align-items': 'center',
        'white-space': 'nowrap',
        'padding': `0 ${tokens}('size-3')`,
        'vertical-align': 'middle',
        'cursor': 'default',
        'max-width': '100%',
        'letter-spacing': '0',
        'height': tokens('size-6'),
    },
    success: {
        'background-color': tokens('success'),
        'color': tokens('white'),
    },
    error: {
        'background-color': tokens('error'),
        'color': tokens('white')
    },
    warning: {
        'background-color': tokens('warning'),
        'color': tokens('white')
    },
    small: {
        'height': tokens('size-6'),
        'font': tokens('font-caption'),
        'font-weight': tokens('bold')
    },
    medium: {
        'height': tokens('size-7'),
        'font': tokens('font-callout'),
        'font-weight': tokens('bold')
    },
    big: {
        'height': tokens('size-8'),
        'font': tokens('font-body'),
        'font-weight': tokens('bold'),
        'padding': `0 ${tokens}('size-4')`
    }
};

class OlaTag extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'variant': 'enum(success,error,warning)',
        'size': 'enum(small,medium,big)',
    };

    static defaultAttributes = {
        size: 'small',
    };

    render() {
        return `
        <table class="ola_tag">
            <tbody>
                <tr>
                    <td style="background:pink; padding: 2px 14px;border-radius:8px">
                        ${this.renderMJML(`<ola-text variant="caption" font-weight="bold" align="center">${this.getContent()}</ola-text>`)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }

    _render() {
        const attributes = {
            ...styles.default,
            ...styles[this.getAttribute('variant')],
            ...styles[this.getAttribute('size')],
        };

        return this.renderMJML(`
            <mj-text
            ${this.htmlAttributes({
            ...attributes
        })}
            >
                ${this.getContent()}
            </mj-text>

		`);
    }
}

module.exports = OlaTag;
