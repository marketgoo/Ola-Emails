import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

module.exports = class OlaHeader extends BodyComponent {
  static endingTag = true

  render() {
    return this.renderMJML(`
    <mj-section vertical-align="middle">
        <mj-column vertical-align="middle">
            <mj-image width="154px" align="left" src="marketgoo.png" href="https://marketgoo.com" alt="marketgoo"></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
            <mj-text ${this.htmlAttributes({
                ...tokens['font-caption'],
                color: tokens['gray'],
                align: 'right'
            })}>
                <a href="#" style="color:inherit;">Open in browser</a>
            </mj-text>
        </mj-column>
    </mj-section>
	`)
  }
}
