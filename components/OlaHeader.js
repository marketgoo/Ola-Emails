import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-body': ['ola-header'],
})

export default class OlaHeader extends BodyComponent {
  static endingTag = true

  headStyle() {
    return `
      .ola_header a {
        color: inherit;
      }
    `;
  }

  render() {
    return this.renderMJML(`
    <mj-section vertical-align="middle" css-class="ola_header">
        <mj-column vertical-align="middle">
            <mj-image width="154px" align="left" src="marketgoo.png" href="https://marketgoo.com" alt="marketgoo"></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
            <ola-text variant="caption" color="gray" align="right">
                <a href="#">Open in browser</a>
            </ola-text>
        </mj-column>
    </mj-section>
	`)
  }
}
