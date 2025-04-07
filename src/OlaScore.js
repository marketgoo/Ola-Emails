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
        size: 'integer',
    };

    static defaultAttributes = {
        value: 50,
        title: 'Your score',
        level: 'medium',
        align: 'center',
        'src-prefix': 'https://apps.marketgoo.com/assets/themes/10edfa953b/mktgoo/charts/score/',
        size: 180,
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
      .ola_score-percentage-small {
        vertical-align: baseline;
        font-family: ${tokens('font-4-medium', 'font-family')};
        font-size: ${tokens('font-4-medium', 'font-size')};
        font-weight: ${tokens('font-4-medium', 'font-weight')};
        color: ${tokens('color-neutral-400')};
      }
    `;
    }

    render() {
        const value = this.getAttribute('value');
        const image = `${this.getAttribute('src-prefix')}${value}.png`;
        let level = 'color-negative-500';
        const size = this.getAttribute('size');
        const isSmall = size < OlaScore.defaultAttributes.size;
        const percentageClass = isSmall ? 'ola_score-percentage-small' : 'ola_score-percentage';
        const fontVariant = isSmall ? 'font-4-medium' : 'font-8-medium';

        if (value >= 85) {
            level = 'color-positive-500';
        } else if (value >= 50) {
            level = 'color-warning-500';
        }

        // Check if title and level were explicitly provided
        const hasTitle = this.props.attributes && this.props.attributes.hasOwnProperty('title');
        const hasLevel = this.props.attributes && this.props.attributes.hasOwnProperty('level');

        return `
        <table class="ola_score" style="width:${size}px;height:${size}px;background-image:url(${image});background-repeat:no-repeat;background-position:center center;background-size:${size}px ${size}px">
            <tbody>
                <tr>
                    <td style="width:${size}px;height:${size}px;">
                        ${hasTitle ? this.renderMJML(
                            `<ola-text variant="font-0-regular" color="color-neutral-700" font-weight="font-weight-bold" align="center"><p>${this.getAttribute(
                                'title',
                            )}</p></ola-text>`,
                        ) : ''}
                        ${this.renderMJML(
                            `<ola-text variant="${fontVariant}" align="center"><p style="line-height:${size/3}px">${value}<sup class="${percentageClass}"> %</sup></p></ola-text>`,
                        )}
                        ${hasLevel ? this.renderMJML(`<ola-tag variant="${level}"><p>${this.getAttribute('level')}</p></ola-tag>`) : ''}
                    </td>
                </tr>
            </tbody>
        </table>
        `;
    }
}

module.exports = OlaScore;
