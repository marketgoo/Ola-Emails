const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-table-row': ['ola-table-cell'],
});


class OlaTableCell extends BodyComponent {

    static allowedAttributes = {
        header: 'boolean',
        highlight: 'boolean',
        align: 'enum(left,center,right)'
    };

    static defaultAttributes = {
        header: 'false',
        highlight: 'false',
        align: 'center'
    };

    render() {
        const header = this.getAttribute('header') === true;
        const is_highlight = this.getAttribute('highlight') === true;
        const background_cell = is_highlight ? tokens('gray-xlight') : "transparent";
        const padding = is_highlight ? "15px" : "15px 0";
        return (`
            ${header ? `<th align="${this.getAttribute('align')}" style="padding: 15px;">
                            ${this.renderChildren()}
                        </th>` :
                        `<td style="padding: ${padding}; background-color: ${background_cell};">
                            ${this.renderChildren()}
                        </td>`
            }
        `)
    }
}

module.exports = OlaTableCell;