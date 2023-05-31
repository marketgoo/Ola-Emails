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
        src: null,
        alt: null,
    };

    render() {
        return this.renderMJML(`
      <mj-section border-top="solid 1px ${tokens('color-neutral-400')}">
        <mj-column
          vertical-align="middle"
          width="112px"
          padding=0
          >
          <mj-image
            ${this.htmlAttributes({
                width: '84px',
                align: 'center',
                padding: `${tokens('size-1')} 0`,
                src: this.getAttribute('src'),
                href: this.getAttribute('href'),
                alt: this.getAttribute('alt'),
            })}
          ></mj-image>
        </mj-column>
        <mj-column vertical-align="middle" padding="0 ${tokens('size-3')}" width="66%">
          <ola-text variant="font-0-regular" color="color-neutral-700" align="center">
            ${this.getContent()}
          </ola-text>
        </mj-column>
      </mj-section>
	`);
    }
}

module.exports = OlaFooterAddress;
