const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

const tokens = require('../tokens');

registerDependencies({
    'mj-body': ['ola-header']
});

class OlaHeader extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string',
        src: 'string',
        alt: 'string',
        color: 'string',
        'background-color': 'string',
    };

    static defaultAttributes = {
        href: '#',
        'background-color': 'white',
        'color': 'gray',
    };

    headStyle() {
        return `
      .ola_header a {
        color: inherit;
      }
    `;
    }

    render() {
        return this.renderMJML(`
    <mj-section
      vertical-align="middle"
      css-class="ola_header"
      padding="${tokens('size-6')}"
      >
        <mj-column vertical-align="middle">
            <mj-image
                width="154px"
                align="left"
                padding="0"
                src="${this.getAttribute('src')}"
                href="${this.getAttribute('href')}"
                alt="${this.getAttribute('alt')}"
            ></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
            <ola-text
              variant="caption"
              color="${this.getAttribute('color')}"
              align="right"
              >
                ${this.getContent()}
            </ola-text>
        </mj-column>
    </mj-section>
	`);
    }
}

module.exports = OlaHeader;
