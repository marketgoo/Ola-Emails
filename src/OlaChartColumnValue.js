const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaChartColumnValue extends BodyComponent {
    static allowedAttributes = {
        value: 'string',
        color: 'enum(color-primary-500,color-primary-600,color-primary-700,color-white,color-neutral-900,color-neutral-700,color-neutral-400,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)',
        opacity: 'string',
        label: 'string',
    };

    static defaultAttributes = {
        color: 'color-neutral-700',
        opacity: '1',
    };

    headStyle() {
        return `
      .ola_chartColumn-value {
        vertical-align: bottom;
        padding: 0 ${tokens('size-0')};
        width: 120px;
      }

      .ola_chartColumn-graphic {
        border-top-right-radius: ${tokens('radius-s')};
        border-top-left-radius: ${tokens('radius-s')};
      }
    `;
    }

    render() {
        return `
            <td class="ola_chartColumn-value" style="opacity: ${this.getAttribute('opacity')}">
              <div class="ola_chartColumn-label">
                ${this.renderMJML(
                    `<ola-text variant="font-1-regular" align="center" color="color-neutral-700" font-weight="font-weight-bold" > ${this.getAttribute(
                        'label',
                    )} </ola-text>`,
                )}
              </div>
              <div class="ola_chartColumn-graphic" style="height:${
                  parseInt(tokens('size-12')) * this.getAttribute('value')
              }px; background-color: ${tokens(this.getAttribute('color'))}; border-bottom: solid 1px ${tokens(
                  this.getAttribute('color'),
              )};"></div>
            </td>
        `;
    }
}

module.exports = OlaChartColumnValue;
