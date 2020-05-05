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
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_panel-section {
          padding-right: ${tokens('size-7')};
          padding-left: ${tokens('size-7')};
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
