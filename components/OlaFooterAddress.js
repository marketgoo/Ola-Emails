import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
  'mj-body': ['ola-footer-address'],
})

export default class OlaFooterAddress extends BodyComponent {
  static endingTag = true

  render() {
    return this.renderMJML(`
      <mj-section border-top="solid 1px ${tokens['gray-light']}">
        <mj-column vertical-align="middle" width="102px" padding-right="28px">
            <mj-image padding="0" width="84px" align="left" src="marketgoo.png" href="https://marketgoo.com" alt="marketgoo"></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
          <ola-text variant="caption" color="gray" align="center">
            ${this.getContent()}
          </ola-text>
        </mj-column>
      </mj-section>
	`)
  }
}
