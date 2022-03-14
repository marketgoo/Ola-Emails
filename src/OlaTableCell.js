const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-table-row': ['ola-table-cell'],
});


class OlaTableCell extends BodyComponent {

    static allowedAttributes = {
        'header': 'boolean',
        'highlight': 'boolean',
        'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)',
        'align': 'enum(left,center,right)',
        'padding': 'string',
        'width': 'string'
    };

    static defaultAttributes = {
        'header': 'false',
        'highlight': 'false',
        'background-color': 'gray-xxlight',
        'align': 'center',
        'padding': '15px 0',
        'width': 'auto'
    };

    render() {
        const header = this.getAttribute('header') === true;
        const is_highlight = this.getAttribute('highlight') === true;
        const background_cell = is_highlight ? tokens(this.getAttribute('background-color')) : "transparent";
        return (`
            ${header ? `<th align="${this.getAttribute('align')}" style="padding: 15px; width: ${this.getAttribute('width')}">
                            ${this.renderChildren()}
                        </th>` :
                        `<td align="${this.getAttribute('align')}" style="padding: ${this.getAttribute('padding')}; background-color: ${background_cell}; width: ${this.getAttribute('width')}">
                            ${this.renderChildren()}
                        </td>`
            }
        `)
    }
}

module.exports = OlaTableCell;