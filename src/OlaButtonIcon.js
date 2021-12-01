const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaButtonIcon extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(primary,secondary,link)',
        href: 'string',
        icon: 'string',
    };

    headStyle() {
        return `
      .ola_button-link a {
        padding: 10px 8px !important;
      }
    `;
    }

    render() {
        return `
            <a class="ola_button-icon" href=${this.getAttribute('href')} target="_blank">
            <table style="border-spacing: 0;">
                <tbody>
                    <tr>
                        <td class="ola_button-${this.getAttribute('variant')}">
                            ${this.renderMJML(`
                            <ola-button variant=${this.getAttribute('variant')} href=${this.getAttribute('href')}>
                                ${this.getContent()}
                            </ola-button> `)}
                        </td>
                        <td>
                            ${this.renderMJML(`
                                <ola-icon icon="${this.getAttribute('icon')}" />
                            `)}
                        </td>
                    </tr>
                </tbody>
            </table>
            </a>
        `
    }
}

module.exports = OlaButtonIcon;