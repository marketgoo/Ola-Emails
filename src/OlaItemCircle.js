const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaItemCircle extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)',
        'color': 'string',
        'number': 'string',
    };

    static defaultAttributes = {
        'background-color': 'gray',
        'color': 'white',
        'number': '1',
    };

    headStyle() {
        return `
    .ola_circle-number {
        width: ${tokens('size-8')};
        height: ${tokens('size-8')};
        padding: ${tokens('size-2')};
        margin: ${tokens('size-2')} 0 0;
    }
    span {
        font-size: ${tokens('size-4')}
    }
    `;
    }

    render() {
        return `
    <table class="ola_circle" style="border-radius: 50%; background-color:${tokens(this.getAttribute('background-color'))};">
        <tr>
            <td class="ola_circle-number">
                ${this.renderMJML(`
                <ola-text ${this.htmlAttributes({
                    'variant': 'body',
                    'align': 'center',
                    'color': this.getAttribute('color'),
                    'font-weight': 'bold'
                })}>
                ${this.getAttribute('number') + this.getContent()}
                </ola-text>
                `)}
            <td/>
        </tr>
    </table>
`;
}
}

module.exports = OlaItemCircle;