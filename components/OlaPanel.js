import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
  'mj-body': ['ola-panel'],
})

module.exports = class OlaPanel extends BodyComponent {
  static endingTag = true

  headStyle() {
    return `
      .ola_panel {
        border-radius: ${tokens.radius};
        background-color: ${tokens.white};
        box-shadow: ${tokens['shadow-1']};
      }
      @media only screen and (max-width:600px) {
        .ola_panel {
          border-radius: 0;
        }
      }
    `;
  }

  render() {
    return this.renderMJML(`
      <mj-wrapper css-class="ola_panel">
        ${this.getContent()}
      </mj-wrapper>
		`)
  }
}
