const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel': ['ola-panel-title'],
});

class OlaPanelTitle extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(title,headline,body)',
        color: 'string',
        'background-color': 'string',
    };

    static defaultAttributes = {
        variant: 'body',
        color: 'black',
        'background-color': 'white',
    };

    headStyle(breakpoint) {
        return `
      .ola_panel-title {
        border-top-left-radius: ${tokens('radius')};
        border-top-right-radius: ${tokens('radius')};
        padding-top: ${tokens('size-4')};
        padding-bottom: ${tokens('size-4')};
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_panel-title {
          border-radius: 0;
          padding-right: ${tokens('size-7')};
          padding-left: ${tokens('size-7')};
        }
      }
    `;
    }

    render() {
        return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
          'css-class': 'ola_panel-title',
          'padding-bottom': '0',
          'background-color': tokens(this.getAttribute('background-color')),
      })}>
        <mj-column>
            <ola-text
                variant="${this.getAttribute('variant')}"
                font-weight="bold"
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
