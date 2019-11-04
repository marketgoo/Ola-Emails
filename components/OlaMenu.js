import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
  'mj-body': ['ola-menu'],
})

export default class OlaMenu extends BodyComponent {
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
