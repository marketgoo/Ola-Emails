const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

// registerDependencies({
//     'ola-panel': ['ola-tag'],
// });

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
        const background_color = this.getAttribute('variant') ? tokens(this.getAttribute('variant')) : tokens('gray-xlight');
        const color = this.getAttribute('variant') ? 'white' : tokens('black');
        const height = this.getAttribute('size') === 'medium' ? tokens('size-7') : this.getAttribute('size') === 'big' ? tokens('size-7') : tokens('size-6')
        const font = this.getAttribute('size') === 'medium' ? 'callout' : this.getAttribute('size') === 'big' ? 'body' : 'caption'

        return `
        <table class="ola_tag" style="margin: auto">
            <tbody>
                <tr>
                    <td
                    style="background-color:${background_color}; border-radius:${tokens('radius-small')}; padding: 0 ${tokens('size-3')}; display: inline-flex; align-items: center;white-space: nowrap; vertical-align: middle; cursor: default; max-width: 100%; letter-spacing: 0; height: ${height};"
                    >
                        ${this.renderMJML(`<ola-text font-weight="bold" align="center" color=${color} variant=${font} >
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
