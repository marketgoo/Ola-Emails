const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-footer-message'],
});

class OlaFooterMessage extends BodyComponent {
    static endingTag = true;

    headStyle() {
        return `
      .ola_footer-message a {
        color: inherit;
      }
    `;
    }

    render() {
        return this.renderMJML(`
      <mj-section padding="${tokens('size-6')}">
        <mj-column css-class="ola_footer-message">
          <ola-text variant="caption" color="gray" align="center">
            ${this.getContent()}
          </ola-text>
        </mj-column>
      </mj-section>
	`);
    }
}

module.exports = OlaFooterMessage;
