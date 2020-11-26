const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel-section': ['ola-score'],
});

class OlaScore extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        value: 'integer',
        title: 'string',
        level: 'string',
        align: 'enum(left,center,right)',
        'src-prefix': 'string',
    };

    static defaultAttributes = {
        value: 50,
        title: 'Your score',
        level: 'medium',
        align: 'center',
        'src-prefix': 'https://apps.marketgoo.com/assets/themes/10edfa953b/mktgoo/charts/score/',
    };

    headStyle() {
        return `
      .ola_score-percentage {
        vertical-align: baseline;
        font-family: ${tokens('font-title', 'font-family')};
        font-size: ${tokens('font-title', 'font-size')};
        font-weight: ${tokens('font-title', 'font-weight')};
        color: ${tokens('gray-light')};
      }
    `;
    }

    render() {
        const image = `${this.getAttribute('src-prefix')}${this.getAttribute('value')}.png`;

        return `
        <table class="ola_score" style="width:180px;height:180px;background-image:url(${image});background-repeat:no-repeat;background-position:center center;background-size:180px 180px">
            <tbody>
                <tr>
                    <td style="width:180px;height:180px;">
                        ${this.renderMJML(`<ola-text variant="caption" font-weight="bold" align="center"><p>${this.getAttribute('title')}</p></ola-text>`)}
                        ${this.renderMJML(`<ola-text variant="display" align="center"><p>${this.getAttribute('value')}<sup class="ola_score-percentage"> %</sup></p></ola-text>`)}
                        ${this.renderMJML(`<ola-text variant="caption" font-weight="bold" align="center"><p>${this.getAttribute('level')}</p></ola-text>`)}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
    }
}

module.exports = OlaScore;
