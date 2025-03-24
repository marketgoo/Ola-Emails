const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

registerDependencies({
    'mj-column': ['ola-card'],
    'ola-card': ['mj-section', 'ola-card-header', 'ola-text', 'ola-score'],
});

class OlaCard extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'border': 'string',
        'border-radius': 'string',
        'background-color': 'string',
    };

    static defaultAttributes = {
        'border': '1px solid #DDDDDD',
        'border-radius': '8px',
        'background-color': '#FFFFFF',
    };

    render() {
        return this.renderMJML(`
            <mj-wrapper
                padding="0"
                border="${this.getAttribute('border')}"
                border-radius="${this.getAttribute('border-radius')}"
                background-color="${this.getAttribute('background-color')}"
            >
                ${this.getContent()}
            </mj-wrapper>
        `);
    }
}

module.exports = OlaCard;
