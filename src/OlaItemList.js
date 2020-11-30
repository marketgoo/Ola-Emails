const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'title': 'string',
        text: 'string',
        icon: 'string',
    };

    render() {
        return `
        <table style="margin-bottom:${tokens('size-7')}; width:100%">
            <tbody>
                <tr>
                    <td style="vertical-align:top; padding:${tokens('size-2')}; width:${tokens('size-8')}">
                        <table>
                            <tr>
                                <td style="width: 100%;">
                                    ${this.renderMJML(`
                                    <mj-image
                                    src="${this.getAttribute('icon')}"
                                    ></mj-image>
                                    `)}
                                <td/>
                            </tr>
                        </table>
                    </td>
                    <td>
                        ${this.renderMJML(`<ola-text variant="callout" font-weight="bold">${this.getAttribute('title')}</ola-text>`)}
                        ${this.renderMJML(this.getContent())}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaItemList;
