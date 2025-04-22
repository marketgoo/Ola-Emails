const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

registerDependencies({
    'mj-column': ['ola-card'],
    'ola-card': ['mj-section', 'ola-card-header', 'ola-card-content', 'ola-text', 'ola-score'],
});

class OlaCard extends BodyComponent {
    static endingTag = true;

    headStyle(breakpoint) {
        return `
        .card {
            border: 1px solid #DDDDDD;
            border-radius: 8px;
            background-color: #FFFFFF;
            height: 176px;
            width: 100%;
        }
        @media only screen and (max-width:${breakpoint}) {
            .card {
                width: 100% !important;
            }
        }
        `;
    }

    render() {
        return this.renderMJML(`
            <mj-wrapper
                css-class="card"
                padding="0"
                full-width="full-width"
            >
                ${this.getContent()}
            </mj-wrapper>
        `);
    }
}

module.exports = OlaCard;
