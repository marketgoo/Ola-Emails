const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

registerDependencies({
    'mj-body': ['ola-hero']
});

class OlaHero extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string'
    };

    render() {
        return this.renderMJML(`
    <mj-wrapper ${this.htmlAttributes({
        'css-class': 'ola_hero',
        'full-width': 'full-width',
        'background-color': tokens('black'),
        padding: 0
    })}>
        ${this.getContent()}
    </mj-wrapper>
	`);
    }
}

module.exports = OlaHero;
