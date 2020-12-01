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
                <table>
                    <tr>
                        <td style="width:52px" >
                            ${this.renderMJML(`<mj-image align="center" src="${this.getAttribute('icon')}"></mj-image>`)}
                        <td/>
                    </tr>
                </table>
                `;
    }
}

module.exports = OlaItemIcon;