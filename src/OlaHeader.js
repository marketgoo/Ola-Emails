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
        const logo =
            this.getAttribute('variant') === 'light'
                ? 'https://marketgoo.github.io/Ola-Emails/img/logo-brand.png'
                : 'https://marketgoo.github.io/Ola-Emails/img/logo-white.png';

        if (this.getAttribute('href')) {
            const colorText = this.getAttribute('variant') === 'light' ? 'gray' : 'gray-light';

            content = `
            <mj-column vertical-align="middle" css-class="ola_header-content">
                <ola-text variant="caption" color="${colorText}">
                    <a href="${this.getAttribute('href')}" target="_blank">${this.getAttribute('text')}</a>
                </ola-text>
            </mj-column>`;
        }

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
                src="${logo}"
            ></mj-image>
        </mj-column>
        ${content}
    </mj-section>
	`);
    }
}

module.exports = OlaHeader;
