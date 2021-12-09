const { registerDependencies } = require('mjml-validator');
const MJColumn = require('mjml-column');
const tokens = require('./tokens');

class OlaColumn extends MJColumn {
    getAttribute(name) {
        const value = super.getAttribute(name);
        return tokens(value) || value;
    }
}

module.exports = OlaColumn;