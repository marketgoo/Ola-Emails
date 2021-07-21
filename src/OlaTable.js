const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');


class OlaTable extends BodyComponent {

    render() {
        return (`
        <table style="width: 100%;">
            ${this.renderChildren()}
        </table>
        `);
    }
}

module.exports = OlaTable;
