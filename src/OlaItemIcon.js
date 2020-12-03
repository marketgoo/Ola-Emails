const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemIcon extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        icon: 'string',
    };

    render() {
        return `
                <table style="margin: auto">
                    <tr>
                        <td style="width:${tokens('size-8')}px" >
                            ${this.renderMJML(`<mj-image align="center" width="${tokens('size-8')}" src="${this.getAttribute('icon')}"></mj-image>`)}
                        <td/>
                    </tr>
                </table>
                `;
    }
}

module.exports = OlaItemIcon;