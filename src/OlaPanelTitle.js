const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
  'ola-panel': ['ola-panel-title']
});

class OlaPanelTitle extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    variant: 'enum(font-5-medium,font-3-regular,font-2-regular)',
    color: 'string',
    'background-color': 'string'
  };

  static defaultAttributes = {
    variant: 'font-2-regular',
    color: 'color-neutral-900',
    'background-color': 'color-white'
  };

  headStyle(breakpoint) {
    return `
      .ola_panel-title {
        border-top-left-radius: ${tokens('radius-m')};
        border-top-right-radius: ${tokens('radius-m')};
        padding-top: ${tokens('size-2')};
        padding-bottom: ${tokens('size-2')};
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_panel-title {
          border-radius: 0;
          padding-right: ${tokens('size-4')};
          padding-left: ${tokens('size-4')};
        }
      }
    `;
  }

  render() {
    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'css-class': 'ola_panel-title',
        'padding-bottom': '0',
        'background-color': tokens(this.getAttribute('background-color'))
      })}>
        <mj-column>
            <ola-text
                variant="${this.getAttribute('variant')}"
                font-weight="font-weight-bold"
                color="${this.getAttribute('color')}"
            >
                ${this.getContent()}
            </ola-text>
        </mj-column>
      </mj-section>
		`);
  }
}

module.exports = OlaPanelTitle;
