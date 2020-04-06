const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-footer-address'],
});

class OlaFooterAddress extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string',
        src: 'string',
        alt: 'string',
    };

    static defaultAttributes = {
        href: '#',
    };

    render() {
        return this.renderMJML(`
      <mj-section border-top="solid 1px ${tokens('gray-light')}">
        <mj-column
          vertical-align="middle"
          width="112px"
          padding=0
          >
          <mj-image
            width="84px"
            align="center"
            padding="${tokens('size-3')} 0"
            src="${this.getAttribute('src')}"
            href="${this.getAttribute('href')}"
            alt="${this.getAttribute('alt')}"
          ></mj-image>
        </mj-column>
        <mj-column vertical-align="middle" padding="0 ${tokens('size-6')}" width="66%">
          <ola-text variant="caption" color="gray" align="center">
            ${this.getContent()}
          </ola-text>
        </mj-column>
      </mj-section>
	`);
    }
}

module.exports = OlaFooterAddress;
