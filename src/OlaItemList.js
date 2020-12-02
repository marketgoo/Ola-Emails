const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {

    static allowedAttributes = {

    };

    render() {
        const children = this.props.children;
        const right_children = children.slice(1);

        const copy = children.slice(0)
        const first_child = copy.splice(0, 1);

        return `
        <table style="margin-bottom:${tokens('size-7')}; width:100%">
            <tbody>
                <tr>
                    <td style="vertical-align:top; width:70px">
                        ${this.renderChildren(first_child)}
                    </td>
                    <td>
                        ${this.renderChildren(right_children)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaItemList;
