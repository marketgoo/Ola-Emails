const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
  'ola-card-content': ['ola-long-tag'],
  'mj-column': ['ola-long-tag'],
});

class OlaLongTag extends BodyComponent {
  static endingTag = false;

  static allowedAttributes = {
    'text': 'string',
    'value': 'string',
    'background-color': 'string',
    'text-color': 'string',
    'border': 'string',
    'border-radius': 'string',
  };

  static defaultAttributes = {
    'padding': '0',
  };

  render() {
    return this.renderMJML(`
      <mj-section ${this.htmlAttributes({
        'padding': this.getAttribute('padding'),
        'background-color': this.getAttribute('background-color'),
        'border': this.getAttribute('border'),
        'border-radius': this.getAttribute('border-radius')
      })}>
        <mj-column>
          <ola-text variant="font-0-regular" color="color-neutral-900">
            ${this.getAttribute('text')}
          </ola-text>
        </mj-column>
        <mj-column>
          <ola-text variant="font-0-regular" color="color-neutral-900" align="right">
            ${this.getAttribute('value')}
          </ola-text>
        </mj-column>
      </mj-section>
    `);
  }
}

module.exports = OlaLongTag;
