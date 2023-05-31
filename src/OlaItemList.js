const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {

    static allowedAttributes = {
        'background-color': 'enum(color-primary-500,color-white-100,color-neutral-900,color-neutral-700,color-neutral-400,color-neutral-200,color-neutral-100,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)'
    };

    static defaultAttributes = {
        'background-color': 'color-white-100'
    };

    headStyle() {
        return `
    .ola_item-list {
        margin-bottom:${tokens('size-4')};
        width:100%;
        border-radius: ${tokens('radius-m')};
        border-collapse: separate;
        border-spacing: ${tokens('size-1')};
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
                    <td style="padding-left:${tokens('size-2')}">
                        ${this.renderChildren(right)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaItemList;
