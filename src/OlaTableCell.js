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
        'background-color':
            'enum(color-primary-500,color-white-100,color-neutral-900,color-neutral-700,color-neutral-400,color-neutral-200,color-neutral-100,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)',
        align: 'enum(left,center,right)',
        padding: 'string',
        width: 'string',
    };

    static defaultAttributes = {
        header: 'false',
        highlight: 'false',
        'background-color': 'color-neutral-100',
        align: 'center',
        padding: '15px 0',
        width: 'auto',
    };

    render() {
        const header = this.getAttribute('header') === true;
        const is_highlight = this.getAttribute('highlight') === true;
        const background_cell = is_highlight ? tokens(this.getAttribute('background-color')) : 'transparent';
        return `
            ${
                header
                    ? `<th align="${this.getAttribute('align')}" style="padding: 15px; width: ${this.getAttribute(
                          'width'
                      )}">
                            ${this.renderChildren()}
                        </th>`
                    : `<td align="${this.getAttribute('align')}" style="padding: ${this.getAttribute(
                          'padding'
                      )}; background-color: ${background_cell}; width: ${this.getAttribute('width')}">
                            ${this.renderChildren()}
                        </td>`
            }
        `;
    }
}

module.exports = OlaTableCell;
