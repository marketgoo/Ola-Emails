import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

module.exports = class OlaSignature extends BodyComponent {
    static endingTag = true

    headStyle(breakpoint) {
      return `
        .ola_signature {
          padding: 0 ${tokens['size-8']};
        }
        @media only screen and (max-width:${breakpoint}) {
          .ola_signature {
            padding: 0 ${tokens['size-7']};
          }
        }
      `;
    }

    render() {
      return this.renderMJML(`
      <mj-section vertical-align="middle" css-class="ola_signature">
          <mj-column vertical-align="middle" width="88px" padding-right="28px" css-class="ola_signature-image">
              <mj-image border-radius="30px" width="60px" height="60px" align="left" padding="0" src="person.jpg" alt="marketgoo"></mj-image>
          </mj-column>
          <mj-column vertical-align="middle" css-class="ola_signature-text">
            <ola-text variant="callout" font-weight="bold">Thanks,</ola-text>
            <ola-text variant="caption">David Roch and the marketgoo team</ola-text>
          </mj-column>
      </mj-section>
      `)
    }
}
