const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');
const tokens = require('./tokens');

class OlaIssue extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    icon: 'string'
  };

  headStyle(breakpoint) {
    return `
      .ola_task {
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
      }
      .ola_task td {
          padding: ${tokens('size-2')} 0;
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_task {
          padding-right: ${tokens('size-4')};
          padding-left: ${tokens('size-4')};
        }
      }
    `;
  }

  render() {
    return `
        <table class="ola_task" style="vertical-align:middle;text-align=left">
            <tbody>
                    <tr>
                        <td style="width:44px;vertical-align:top;">
                                <img
                                    src="${this.getAttribute('icon')}"
                                    width="28"
                                    style="font-8-medium:block;"
                                    >
                        </td>
                        <td style="vertical-align:middle;">
                            ${this.renderMJML(`
                            <ola-text variant="font-2-regular">
                                ${this.getContent()}
                            </ola-text>
                            `)}
                        </td>
                    </tr>
            </tbody>
        </table>
		`;
  }
}

module.exports = OlaIssue;
