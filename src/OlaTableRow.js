const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-table': ['ola-table-row'],
});

class OlaTableRow extends BodyComponent {
    render() {
        return `
        <tr style="padding:15px 0; border-bottom:1px solid ${tokens('color-neutral-200')};">
            ${this.renderChildren()}
        </tr>
        `;
    }
}

module.exports = OlaTableRow;
