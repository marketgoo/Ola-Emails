const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel-section': ['ola-thumbnail'],
});

class OlaThumbnail extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
        align: 'string',
        text: 'string'
    };

    static defaultAttributes = {
        alt: '',
        align: 'center',
        'css-class': 'ola_thumbnail'
    };

    headStyle() {
        return `
    .ola_thumbnail img {
        border-radius: ${tokens('radius')};
        box-shadow: ${tokens('shadow-2')};
    }`;
    }

    render() {
        if (this.getAttribute('text')) {
            return `
        <table>
            <tbody>
                <tr>
                    <td style="padding-right:20px">${this.renderMJML(`
                    <mj-image
                        src="${this.getAttribute('src')}"
                        alt="${this.getAttribute('alt')}"
                        width="250px"
                    />
            `)} </td>
                    <td>${this.renderMJML(`
                    <ola-text>${this.getAttribute('text')} </ola-text>
                    `)} </td>
                </tr>
            </tbody>
        </table>
        `
        } else {
            return this.renderMJML(`
                <mj-image
                    src="${this.getAttribute('src')}"
                    alt="${this.getAttribute('alt')}"
                    width="250px"
                />
        `)
        }

    }
}

module.exports = OlaThumbnail;
