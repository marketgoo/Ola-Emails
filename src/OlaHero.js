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

    headStyle() {
        return `
      .ola_hero-header {
        border-radius: ${tokens('radius')} ${tokens('radius')} 0 0;
        background-color: ${tokens('white')};
      }
      @media only screen and (max-width:600px) {
        .ola_hero-header {
          border-radius: 0;
        }
      }
    `;
    }

    render() {
        return this.renderMJML(`
    <mj-wrapper
        css-class="ola_hero"
        full-width="full-width"
        background-color="${this.getAttribute('background-color')}"
        padding="0"
        >
        <ola-header src="https://marketgoo.github.io/Ola-Emails/marketgoo.png">
            <a href="#">Open in browser</a>
        </ola-header>

        <mj-section padding-bottom="0">
            <mj-column>
                <mj-image
                    padding="0"
                    src="${this.getAttribute('src')}"
                    alt="${this.getAttribute('alt')}"
                    width="300px"
                ></mj-image>
            </mj-column>
        </mj-section>

        <mj-section
            vertical-align="middle"
            padding="${tokens('size-8')} ${tokens('size-8')} 0  ${tokens('size-8')}"
            css-class="ola_hero-header"
            >
            <mj-column>
                ${this.getContent()}
            </mj-column>
        </section>
    </mj-wrapper>
	`);
    }
}

module.exports = OlaHero;
