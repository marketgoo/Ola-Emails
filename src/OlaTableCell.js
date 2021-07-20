const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-table-row': ['ola-table-cell'],
});


class OlaTableCell extends BodyComponent {

    static allowedAttributes = {
        header: 'boolean',
        focused: 'boolean'
    };

    static defaultAttributes = {
        header: 'false',
        focused: 'false'
    };

    render() {
        const header = this.getAttribute('header') === true;
        const focused = this.getAttribute('focused') === true;
        const background_cell = focused ? tokens('gray-xlight') : "transparent";
        return (`
            ${header ? `<th style="padding: 15px; border-bottom:1px solid ${tokens('gray-xlight')};">
                            ${this.renderChildren()}
                        </th>` :
                        `<td style="padding: 15px; background-color: ${background_cell}; border-top:1px solid ${tokens('gray-xlight')};">
                            ${this.renderChildren()}
                        </td>`
            }
        `)
    }
}

module.exports = OlaTableCell;