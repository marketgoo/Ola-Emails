import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import { link } from 'fs';

registerDependencies({
  'mj-body': ['ola-footer-social'],
})

export default class OlaFooterSocial extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'facebook': 'string',
    'twitter': 'string',
    'instagram': 'string',
    'linkedin': 'string'
  }

  render() {
      const links = [];
      Object.keys(OlaFooterSocial.allowedAttributes).forEach(name => {
          if (this.getAttribute(name)) {
              links.push(`<mj-social-element name="${name}" href="${this.getAttribute(name)}"></mj-social-element>`);
          }
      })

      if (!links.length) {
          return '';
      }
    return this.renderMJML(`
        <mj-section>
            <mj-column>
                <mj-social font-size="14px" icon-size="28px" mode="horizontal">
                    ${links.join('')}
                </mj-social>
            </mj-column>
        </mj-section>
	`)
  }
}
