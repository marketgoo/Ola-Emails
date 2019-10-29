import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

const styles = {
  default: {
  },
  highlight: {
    'background-color': tokens['gray-xlight']
  }
}

module.exports = class OlaPanelSection extends BodyComponent {
  static endingTag = true

  static allowedAttributes = {
    'variant': 'enum(default,highlight)'
  }

  static defaultAttributes = {
    'variant': 'default'
  }

  headStyle(breakpoint) {
    return `
      .ola_panel-section {
        padding: ${tokens['size-8']};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_panel-section {
          padding: ${tokens['size-7']}
        }
      }
    `;
  }

  render() {
    const attributes = {
      ...styles[this.getAttribute('variant')]
    }

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({...attributes})} css-class="ola_panel-section">
        ${this.getContent()}
      </mj-section>
		`)
  }
}
