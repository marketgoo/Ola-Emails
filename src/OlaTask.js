const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaTask extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        icon: 'string'
    };

    headStyle(breakpoint) {
        return `
      .ola_task {
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
      }
      .ola_task td {
          padding: ${tokens('size-5')} 0;
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_task {
          padding-right: ${tokens('size-7')};
          padding-left: ${tokens('size-7')};
        }
      }
    `;
    }

    render() {

        return `
        <table class="ola_task" style="vertical-align:middle;text-align=left">
            <tbody>
                    <tr>
                        <td style="width:44px;vertical-align:middle;">
                                <img
                                    src="${this.getAttribute('icon')}"
                                    width="28"
                                    style="display:block;"
                                    >
                        </td>
                        <td style="vertical-align:middle;">
                            ${this.renderMJML(`
                            <ola-text variant="body">
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

module.exports = OlaTask;
