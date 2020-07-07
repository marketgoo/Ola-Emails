const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-hero': ['ola-hero-img'],
});

class OlaThumbnail extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
    };

    static defaultAttributes = {
        alt: '',
    };
    headStyle() {
        return `
      .ola_panel {
        border-radius: ${tokens('radius')};
        background-color: ${tokens('white')};
      }
      .ola_panel-top {
        border-radius: 0 0 ${tokens('radius')} ${tokens('radius')};
        background-color: ${tokens('white')};
      }
      @media only screen and (max-width:600px) {
        .ola_panel {
          border-radius: 0;
        }
        .ola_panel-top {
          border-radius: 0;
        }
      }
    `;
    }
    render() {
        return this.renderMJML(`
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
	`);
    }
}

module.exports = OlaThumbnail;