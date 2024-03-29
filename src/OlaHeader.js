const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-header'],
});

class OlaHeader extends BodyComponent {
    static endingTag = false;

    static allowedAttributes = {
        variant: 'enum(light,dark)',
        text: 'string',
        href: 'string',
        logo: 'string',
    };

    static defaultAttributes = {
        variant: 'light',
    };

    headStyle(breakpoint) {
        return `
      .ola_header a {
        color: inherit;
      }

      @media only screen and (min-width:${breakpoint}) {
        .ola_header-content div {
          text-align: right !important;
        }
      }
    `;
    }

    render() {
        let content = '';
        if (this.getAttribute('href')) {
            const colorText = this.getAttribute('variant') === 'light' ? 'color-neutral-700' : 'color-neutral-400';

            content = `
            <mj-column vertical-align="middle" css-class="ola_header-content">
                <ola-text variant="font-0-regular" color="${colorText}">
                    <a href="${this.getAttribute('href')}" target="_blank">${this.getAttribute('text')}</a>
                </ola-text>
            </mj-column>`;
        }

        return this.renderMJML(`
    <mj-section
      vertical-align="middle"
      css-class="ola_header"
      padding="${tokens('size-3')}"
      >
        <mj-column vertical-align="middle">
            <mj-image
                width="154px"
                align="left"
                padding="0"
                src="${this.getAttribute('logo')}"
            ></mj-image>
        </mj-column>
        ${content}
    </mj-section>
	`);
    }
}

module.exports = OlaHeader;
