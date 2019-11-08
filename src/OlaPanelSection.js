const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

registerDependencies({
    'ola-panel': ['ola-panel-section'],
    'ola-panel-section': ['mj-column']
});

const styles = {
    default: {},
    highlight: {
        'background-color': tokens('gray-xlight')
    }
};

class OlaPanelSection extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        variant: 'enum(default,highlight)'
    };

    static defaultAttributes = {
        variant: 'default'
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
        const attributes = {
            ...styles[this.getAttribute('variant')]
        };

        return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
          'css-class': 'ola_panel-section',
          ...attributes
      })}>
        <mj-column>
          ${this.getContent()}
        </mj-column>
      </mj-section>
		`);
    }
}

module.exports = OlaPanelSection;
