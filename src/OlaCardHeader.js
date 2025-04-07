const { registerDependencies } = require("mjml-validator");
const { BodyComponent } = require("mjml-core");
const tokens = require("./tokens");

registerDependencies({
  "ola-card": ["ola-card-header"],
  "mj-wrapper": ["ola-card-header"],
});

class OlaCardHeader extends BodyComponent {
  static endingTag = false;

  static allowedAttributes = {
    src: "string",
    text: "string",
    "icon-width": "string",
    color: "string",
  };

  static defaultAttributes = {
    "icon-width": "24px",
    color: "color-neutral-700",
  };

  headStyle() {
    return `
      .ola_card-header {
        display: table;
        width: 100%;
      }
      
      .ola_card-header-icon {
        display: table-cell;
        vertical-align: middle;
        padding-right: 4px;
      }
      
      .ola_card-header-text {
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
    `;
  }

  render() {
    return this.renderMJML(`
      <mj-section padding="16px">
        <mj-column>
          <mj-table css-class="ola_card-header" padding="0" width="100%">
            <tr>
              <td class="ola_card-header-icon" style="width: ${this.getAttribute("icon-width")};">
                <img width="${this.getAttribute("icon-width")}" src="${this.getAttribute("src")}" style="display: block;" />
              </td>
              <td class="ola_card-header-text">
                <ola-text variant="font-1-regular" color="${this.getAttribute("color")}">${this.getAttribute("text")}</ola-text>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
    `);
  }
}

module.exports = OlaCardHeader;
