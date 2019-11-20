const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

registerDependencies({
  'ola-panel': ['ola-panel-signature']
});

class OlaPanelSignature extends BodyComponent {
    static endingTag = false;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
        title: 'string',
        subtitle: 'string'
    };

    headStyle(breakpoint) {
        return `
        .ola_panel-signature {
          padding: 0 ${tokens('size-8')};
        }
        @media only screen and (max-width:${breakpoint}) {
          .ola_panel-signature {
            padding: 0 ${tokens('size-7')};
          }
        }
      `;
    }

    render() {
        const img = this.getAttribute('src')
            ? `<mj-column
                vertical-align="middle"
                width="88px"
                padding-right="28px"
                css-class="ola_signature-image"
                >
                  <mj-image
                      border-radius="30px"
                      width="60px"
                      height="60px"
                      align="left"
                      padding="0"
                      src="${this.getAttribute('src')}"
                      alt="${this.getAttribute('alt')}"
                  ></mj-image>
              </mj-column>`
            : '';

        return this.renderMJML(`
      <mj-section vertical-align="middle" css-class="ola_panel-signature" text-align="left">
          ${img}
          <mj-column
            vertical-align="middle"
            css-class="ola_signature-text"
            padding-top="8px"
            padding-bottom="8px"
            >
            <ola-text variant="callout" font-weight="bold">${this.getAttribute('title')}</ola-text>
            <ola-text variant="caption">${this.getAttribute('subtitle')}</ola-text>
          </mj-column>
      </mj-section>
      `);
    }
}

module.exports = OlaPanelSignature;
