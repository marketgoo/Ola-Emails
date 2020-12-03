const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');


class OlaChartColumn extends BodyComponent {

    headStyle() {
        return `
        .ola_chartColumn {
          height: ${tokens('size-10')};
          margin: auto;
      }
    `;
    }

    render() {
        return (`
        <table class="ola_chartColumn">
          <tr>
            ${this.renderChildren()}
          </tr>
          <tr>
            ${this.props.children.map(child =>
              `<td> ${this.renderMJML(`<ola-text variant="caption" align="center" color="gray" > ${child.attributes.footer} </ola-text>`)} </td>`)
              }
          </tr>
        </table>
        `);
    }
}

module.exports = OlaChartColumn;
