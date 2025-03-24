const { registerDependencies } = require("mjml-validator");
const { BodyComponent } = require("mjml-core");

registerDependencies({
  "ola-card": ["ola-card-content"],
  "ola-card-content": ["ola-text", "ola-score", "mj-image", "mj-table"],
});

class OlaCardContent extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    padding: "string",
  };

  static defaultAttributes = {
    padding: "0 16px 16px 16px",
  };

  render() {
    return this.renderMJML(`
            <mj-section padding="${this.getAttribute("padding")}">
                <mj-column>
                    ${this.getContent()}
                </mj-column>
            </mj-section>
        `);
  }
}

module.exports = OlaCardContent;
