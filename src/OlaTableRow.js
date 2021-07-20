const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-table': ['ola-table-row'],
});

class OlaTableRow extends BodyComponent {

    render() {
        return (`
        <tr style="padding:15px 0;">
            ${this.renderChildren()}
        </tr>
        `);
    }
}

module.exports = OlaTableRow;