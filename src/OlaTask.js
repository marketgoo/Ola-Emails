const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

class OlaTask extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(error,suggestion,success,warning)',
    };

    static defaultAttributes = {
        variant: 'error'
    };

    headStyle(breakpoint) {
        return `
      .ola_task {
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
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
        const img = `./img/task-${this.getAttribute('variant')}.png`;

        return this.renderMJML(`
            <mj-section
                vertical-align="middle"
                css-class="ola_task"
                text-align="left"
                border-top="solid 1px ${tokens('gray-light')}"
                >
                <mj-column>
                    <mj-table padding="0">
                        <tr>
                            <td style="width:44px;vertical-align:middle;">
                                <img
                                    src="${img}"
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
                    </mj-table>
                </mj-column>
            </mj-section>
		`);
    }
}

module.exports = OlaTask;
