import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

export default class OlaSignature extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string'
    };

    headStyle(breakpoint) {
        return `
        .ola_signature {
          padding: 0 ${tokens('size-8')};
        }
        @media only screen and (max-width:${breakpoint}) {
          .ola_signature {
            padding: 0 ${tokens('size-7')};
          }
        }
      `;
    }

    render() {
        const img = this.getAttribute('src')
            ? `<mj-column vertical-align="middle" width="88px" padding-right="28px" css-class="ola_signature-image">
            <mj-image ${this.htmlAttributes({
                'border-radius': '30px',
                width: '60px',
                height: '60px',
                align: 'left',
                padding: 0,
                src: 'person.jpg',
                alt: 'Avatar'
            })}></mj-image>
          </mj-column>`
            : '';

        return this.renderMJML(`
      <mj-section vertical-align="middle" css-class="ola_signature">
          ${img}
          <mj-column vertical-align="middle" css-class="ola_signature-text" padding-top="8px" padding-bottom="8px">
            ${this.getContent()}
          </mj-column>
      </mj-section>
      `);
    }
}
