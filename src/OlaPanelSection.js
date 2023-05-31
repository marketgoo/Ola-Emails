const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel': ['ola-panel-section'],
});

class OlaPanelSection extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string',
        multicolumn: 'boolean',
    };

    headStyle(breakpoint) {
        return `
      .ola_panel-section {
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_panel-section {
          padding-right: ${tokens('size-4')};
          padding-left: ${tokens('size-4')};
        }
      }
    `;
    }

    render() {
        const content = this.getAttribute('multicolumn')
            ? this.getContent()
            : `<mj-column>${this.getContent()}</mj-column>`;

        return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
          'css-class': 'ola_panel-section',
          'background-color': tokens(this.getAttribute('background-color')),
      })}>
          ${content}
      </mj-section>
		`);
    }
}

module.exports = OlaPanelSection;
