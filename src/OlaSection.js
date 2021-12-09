const { registerDependencies } = require('mjml-validator');
const MJSection = require('mjml-section');
const tokens = require('./tokens');

class OlaSection extends MJSection {
    getAttribute(name) {
        const value = super.getAttribute(name);
        return tokens(value) || value;
    }
}

module.exports = OlaSection;