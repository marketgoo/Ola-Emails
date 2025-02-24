const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaIssue extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        icon: 'string',
        size: 'enum(small,big)',
        "line-top": 'enum(true,false)',
    };
    static defaultAttributes = {
      size: 'big',
      "line-top": false,
    }

    headStyle(breakpoint) {
        return `
      .ola_task {
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
        width: 100%;
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
      const size = this.getAttribute('size') || 'big';
      const iconSize = size === 'small' ? 24 : 28;
      const fontSize = size === 'small' ? 'font-1-regular' : 'font-2-regular';
      const padding = size === 'small' ? 'size-1' : 'size-2';
      const lineTop = this.getAttribute('line-top') ? `border-top: 1px solid ${tokens("color-neutral-200")};` : '';

        return `
        <table class="ola_task" style="vertical-align:middle;text-align:left;${lineTop}">
            <tbody>
                    <tr>
                        <td style="width:${iconSize + 10}px;vertical-align:top;padding:${tokens(padding)} 0;">
                                <img
                                    src="${this.getAttribute('icon')}"
                                    width="${iconSize}"
                                    >
                        </td>
                        <td style="vertical-align:middle;padding:${tokens(padding)} 0;">
                            ${this.renderMJML(`
                            <ola-text variant="${fontSize}">
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
