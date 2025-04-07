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

  headStyle() {
    return `
        .card-content {
          height: 116px;
          vertical-align: middle;
        }

        .card-content > * {
          height: 100%;
        }
    `;
  }

  render() {
    return this.renderMJML(`
            <mj-section css-class="card-content" padding="${this.getAttribute("padding")}">
                <mj-column css-class="card-content-column">
                    ${this.getContent()}
                </mj-column>
            </mj-section>
        `);
  }
}

module.exports = OlaCardContent;
