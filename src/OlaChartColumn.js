const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaChartColumn extends BodyComponent {
    headStyle() {
        return `
        .ola_chartColumn {
          height: ${tokens('size-12')};
          margin: auto;
      }
    `;
    }

    render() {
        const sub_children = this.props.children.map((child) => child.children);
        return `
        <table class="ola_chartColumn">
          <tr>
            ${this.renderChildren()}
          </tr>
          <tr>
            ${sub_children
                .map((child) => `<td style="vertical-align: top"> ${this.renderChildren(child)} </td>`)
                .join('')}
          </tr>
        </table>
        `;
    }
}

module.exports = OlaChartColumn;
