import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
  'ola-panel': ['ola-panel-section'],
  'ola-panel-section': ['mj-column'],
})

const styles = {
  default: {
  },
  highlight: {
    'background-color': tokens['gray-xlight']
  }
}

export default class OlaPanelSection extends BodyComponent {
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
          padding: ${tokens['size-7']};
        }
      }
    `;
  }

  render() {
    const attributes = {
      ...styles[this.getAttribute('variant')]
    }

    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'css-class': 'ola_panel-section',
        ...attributes
      })}>
        ${this.getContent()}
      </mj-section>
		`)
  }
}
