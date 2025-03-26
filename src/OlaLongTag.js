const { registerDependencies } = require("mjml-validator");
const { BodyComponent } = require("mjml-core");
const tokens = require("./tokens");

registerDependencies({
  "ola-card-content": ["ola-long-tag"],
  "mj-column": ["ola-long-tag"],
});

class OlaLongTag extends BodyComponent {
  static endingTag = false;

  static allowedAttributes = {
    text: "string",
    value: "string",
    "background-color": "string",
    "border-color": "string",
  };

  static defaultAttributes = {
    padding: "2px 0",
    "border-radius": tokens("radius-s"),
  };

  render() {
    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        padding: this.getAttribute("padding"),
        "background-color": tokens(this.getAttribute("background-color")),
        "border-radius": this.getAttribute("border-radius"),
        border: `1px solid ${tokens(this.getAttribute("border-color"))}`,
      })}>
        <mj-column width="70%">
          <ola-text variant="font-0-regular" color="color-neutral-900" padding-left="${tokens("size-1")}">
            ${this.getAttribute("text")}
          </ola-text>
        </mj-column>
        <mj-column width="30%">
          <ola-text variant="font-0-regular" color="color-neutral-900" align="right" padding-right="${tokens("size-1")}">
            ${this.getAttribute("value")}
          </ola-text>
        </mj-column>
      </mj-section>
    `);
  }
}

module.exports = OlaLongTag;
