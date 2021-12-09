const { registerDependencies } = require('mjml-validator');
const MJSection = require('mjml-section');
const tokens = require('./tokens');

class OlaSection extends MJSection {
    getAttribute(name) {
        const value = super.getAttribute(name);
        return tokens(value) || value;
    }

    // static endingTag = true;

    // static allowedAttributes = {
    //     'padding': 'string',
    //     'background-color': 'enum(brand,white,black,gray,gray-light,gray-xlight,gray-xxlight,error,warning,success,pro,premium)',
    // };

    // static defaultAttributes = {
    //     'padding': '0'
    // };

    // render() {
    //     return this.renderMJML(`
    //         <mj-section css-class="ola_section" padding=${this.getAttribute('padding')} background-color=${tokens(this.getAttribute('background-color'))}>
    //             ${this.getContent()}
    //         </mj-section>
    //     `)
    // }
}

module.exports = OlaSection;