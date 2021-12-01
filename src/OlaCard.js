const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaCard extends BodyComponent {
    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)'
    };

    static defaultAttributes = {
        'background-color': 'white'
    };

    headStyle() {
        return `
    .ola_card {
        width: 234px;
        height: 215px;
        border-radius: ${tokens('size-5')};
        border-collapse: collapse;
    }
    `;
    }

    render() {
        const card_elements = this.props.children;
        return `
            <table class="ola_card" style="background-color:${tokens(this.getAttribute('background-color'))};">
                <tbody style="border-top: 20px solid transparent;">
                ${card_elements.map(element => `
                    <tr>
                        <td align="center" class="ola_card-element">
                            ${this.renderMJML(element)}
                        <td/>
                    </tr>
                `)}
                </tbody>
            </table>`;
    }
}

module.exports = OlaCard;