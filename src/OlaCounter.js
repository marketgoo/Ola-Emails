const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel-section': ['ola-counter'],
});

class OlaCounter extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string',
        'color': 'string',
        'number': 'string',
        'title': 'string',
    };

    static defaultAttributes = {
        'background-color': 'accent',
        'color': 'white',
        'number': '1',
    };

    headStyle() {
        return `
      .ola_counter-number {
        width: ${tokens('size-8')};
        height: ${tokens('size-8')};
        padding: ${tokens('size-2')};
        margin: ${tokens('size-2')} 0 0;
      }
    `;
    }

    render() {
        return `
        <table class="ola_counter" style="margin-bottom:${tokens('size-7')}">
            <tbody>
                <tr>
                    <td style="vertical-align:top;width=70px;" width="70px">
                        <table style="border-radius: 50%; background-color:${tokens(this.getAttribute('background-color'))};">
                            <tr>
                                <td class="ola_counter-number">
                                    ${this.renderMJML(`
                                    <ola-text ${this.htmlAttributes({
                                        'variant': 'headline',
                                        'align': 'center',
                                        'color': this.getAttribute('color'),
                                    })}>
                                    ${this.getAttribute('number')}
                                    </ola-text>
                                    `)}
                                <td/>
                            </tr>
                        </table>
                    </td>
                    <td>
                        ${this.renderMJML(`<ola-text variant="body" font-weight="bold"><p>${this.getAttribute('title')}</p></ola-text>`)}
                        ${this.renderMJML(this.getContent())}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaCounter;
