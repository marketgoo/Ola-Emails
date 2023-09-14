const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
  'ola-panel-section': ['ola-score']
});

class OlaScore extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    value: 'integer',
    title: 'string',
    level: 'string',
    align: 'enum(left,center,right)',
    'src-prefix': 'string'
  };

  static defaultAttributes = {
    value: 50,
    title: 'Your score',
    level: 'medium',
    align: 'center',
    'src-prefix':
      'https://apps.marketgoo.com/assets/themes/10edfa953b/mktgoo/charts/score/'
  };

  headStyle() {
    return `
      .ola_score-percentage {
        vertical-align: baseline;
        font-family: ${tokens('font-5-medium', 'font-family')};
        font-size: ${tokens('font-5-medium', 'font-size')};
        font-weight: ${tokens('font-5-medium', 'font-weight')};
        color: ${tokens('color-neutral-400')};
      }
    `;
  }

  render() {
    const value = this.getAttribute('value');
    const image = `${this.getAttribute('src-prefix')}${value}.png`;
    let level = 'color-negative-500';

    if (value >= 85) {
      level = 'color-positive-500';
    } else if (value >= 50) {
      level = 'color-warning-500';
    }

    return `
        <table class="ola_score" style="width:180px;height:180px;background-image:url(${image});background-repeat:no-repeat;background-position:center center;background-size:180px 180px">
            <tbody>
                <tr>
                    <td style="width:180px;height:180px;">
                        ${this.renderMJML(
                          `<ola-text variant="font-0-regular" color="color-neutral-700" font-weight="font-weight-bold" align="center"><p>${this.getAttribute(
                            'title'
                          )}</p></ola-text>`
                        )}
                        ${this.renderMJML(
                          `<ola-text variant="font-8-medium" align="center"><p style="line-height:60px">${value}<sup class="ola_score-percentage"> %</sup></p></ola-text>`
                        )}
                        ${this.renderMJML(
                          `<ola-tag variant="${level}"><p>${this.getAttribute(
                            'level'
                          )}</p></ola-tag>`
                        )}
                    </td>
                </tr>
            </tbody>
        </table>
		`;
  }
}

module.exports = OlaScore;
