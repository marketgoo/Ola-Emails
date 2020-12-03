const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {

    static allowedAttributes = {

    };

    render() {
        const children = this.props.children;
        const left = children.slice(0, 1);
        const right = children.slice(1);

        return `
        <table style="margin-bottom:${tokens('size-7')}; width:100%">
            <tbody>
                <tr>
                    <td style="vertical-align:top; width:70px">
                        ${this.renderChildren(left)}
                    </td>
                    <td>
                        ${this.renderChildren(right)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaItemList;
