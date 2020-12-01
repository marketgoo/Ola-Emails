const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemList extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        icon: 'string',
        title: 'string',
        number: 'string'
    };


    render() {

        const content = this.getAttribute('icon') ? `<ola-item-icon icon=${this.getAttribute('icon')}> </ola-item-icon>` : this.getAttribute('number') ? `<ola-item-circle number=${this.getAttribute('number')}> </ola-item-circle>` : null;
        return `
        <table style="margin-bottom:${tokens('size-7')}; width:100%">
            <tbody>
                <tr>
                    <td style="vertical-align:top; width:70px">
                        ${this.renderMJML(content)}
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
