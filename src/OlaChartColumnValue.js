const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');


class OlaChartColumnValue extends BodyComponent {

    static allowedAttributes = {
      'value': 'string',
      'color': 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)',
      'footer': 'string'
    }

    static defaultAttributes = {
      'color': 'gray'
    }

    headStyle() {
        return `
      .ola_chartColumn-value {
        vertical-align: bottom;
        padding: 0 ${tokens('size-2')};
        width: 120px;
      }

      .ola_chartColumn-graphic {
        border-top-right-radius: ${tokens('radius-small')};
        border-top-left-radius: ${tokens('radius-small')};
      }
    `;
    }

    render() {
        return (`
            <td class="ola_chartColumn-value" >
              <div class="ola_chartColumn-label">
                ${this.renderMJML(`<ola-text variant="callout" align="center" color="gray" font-weight:"bold" > ${this.getContent()} </ola-text>`)}
              </div>
              <div class="ola_chartColumn-graphic" style="height:${parseInt(tokens('size-10')) * this.getAttribute('value')}px; background-color: ${tokens(this.getAttribute('color'))};"></div>
            </td>
        `);
    }
}

module.exports = OlaChartColumnValue;
