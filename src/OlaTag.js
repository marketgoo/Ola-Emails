const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

// registerDependencies({
//     'ola-panel': ['ola-tag'],
// });

class OlaTag extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(color-positive-500,color-negative-500,color-warning-500)',
        size: 'enum(small,medium,big)',
    };

    static defaultAttributes = {
        size: 'small',
    };

    render() {
        const background_color = this.getAttribute('variant')
            ? tokens(this.getAttribute('variant'))
            : tokens('color-neutral-200');
        const color = this.getAttribute('variant') ? 'color-white' : tokens('color-neutral-900');
        const height =
            this.getAttribute('size') === 'medium'
                ? tokens('size-4')
                : this.getAttribute('size') === 'big'
                ? tokens('size-4')
                : tokens('size-3');
        const font =
            this.getAttribute('size') === 'medium'
                ? 'font-1-regular'
                : this.getAttribute('size') === 'big'
                ? 'font-2-regular'
                : 'font-0-regular';

        return `
        <table class="ola_tag" style="margin: auto">
            <tbody>
                <tr>
                    <td
                    style="background-color:${background_color}; border-radius:${tokens(
            'radius-s'
        )}; padding: 0 ${tokens(
            'size-1'
        )}; display: inline-flex; align-items: center;color-white-space: nowrap; vertical-align: middle; cursor: default; max-width: 100%; letter-spacing: 0; height: ${height};"
                    >
                        ${this
                            .renderMJML(`<ola-text font-weight="font-weight-bold" align="center" color=${color} variant=${font} >
                        ${this.getContent()}
                        </ola-text>`)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaTag;
