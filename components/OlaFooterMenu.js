import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
  'mj-body': ['ola-footer-menu'],
})

export default class OlaFooterMenu extends BodyComponent {
  static endingTag = true

  render() {
    return this.renderMJML(`
      <mj-section padding-bottom="0">
        <mj-navbar css-class="ola_menu">
          ${this.getContent()}
        </mj-navbar>
      </mj-section>
	`)
  }
}
