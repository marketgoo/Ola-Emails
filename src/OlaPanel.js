const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-panel'],
});

class OlaPanel extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'close-to': 'enum(top)',
        overlap: 'boolean',
    };

    headStyle() {
        return `
      .ola_panel {
        border-radius: ${tokens('radius-m')};
        background-color: ${tokens('color-white')};
      }
      .ola_panel-overlap {
        margin-top: -30px !important;
        min-width: 90%;
      }
      .ola_panel-top {
        border-radius: 0 0 ${tokens('radius-m')} ${tokens('radius-m')};
        background-color: ${tokens('color-white')};
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
        const extraClassName = this.getAttribute('overlap') && 'ola_panel-overlap';

        return this.renderMJML(`
        <mj-wrapper
          css-class="${className} ${extraClassName}"
          padding-top="0"
          padding-bottom="0"
          >
          ${this.getContent()}
        </mj-wrapper>
		  `);
    }
}

module.exports = OlaPanel;
