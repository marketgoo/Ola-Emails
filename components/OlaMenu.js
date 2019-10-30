import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

module.exports = class OlaMenu extends BodyComponent {
  static endingTag = true

  render() {
    return this.renderMJML(`
      <mj-section>
        <mj-navbar css-class="ola_menu">
          ${this.getContent()}
        </mj-navbar>
      </mj-section>
	`)
  }
}
