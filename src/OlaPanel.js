const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('../tokens');

registerDependencies({
    'mj-body': ['ola-panel']
});

class OlaPanel extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'close-to': 'enum(top)'
    };

    headStyle() {
        return `
      .ola_panel {
        border-radius: ${tokens('radius')};
        background-color: ${tokens('white')};
      }
      .ola_panel-top {
        border-radius: 0 0 ${tokens('radius')} ${tokens('radius')};
        background-color: ${tokens('white')};
      }
      @media only screen and (max-width:600px) {
        .ola_panel {
          border-radius: 0;
        }
        .ola_panel-top {
          border-radius: 0;
        }
      }
    `;
    }

    render() {
        const className = this.getAttribute('close-to') ? `ola_panel-${this.getAttribute('close-to')}` : 'ola_panel';

        return this.renderMJML(`
        <mj-wrapper
          css-class="${className}"
          padding-top="0"
          padding-bottom="0"
          >
          ${this.getContent()}
        </mj-wrapper>
		  `);
    }
}

module.exports = OlaPanel;
