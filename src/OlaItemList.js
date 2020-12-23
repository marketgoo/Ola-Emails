const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {

    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)'
    };

    static defaultAttributes = {
        'background-color': 'white'
    };

    headStyle() {
        return `
    .ola_item-list {
        margin-bottom:${tokens('size-7')};
        width:100%;
        border-radius: ${tokens('radius')};
        border-collapse: separate;
        border-spacing: ${tokens('size-3')};
    }
    `;
    }

    render() {
        const children = this.props.children;
        const left = children.slice(0, 1);
        const right = children.slice(1);

        return `
        <table class="ola_item-list" style="background-color: ${tokens(this.getAttribute('background-color'))};">
            <tbody>
                <tr>
                    <td style="vertical-align:top; width:54px">
                        ${this.renderChildren(left)}
                    </td>
                    <td style="padding-left:${tokens('size-4')}">
                        ${this.renderChildren(right)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaItemList;
