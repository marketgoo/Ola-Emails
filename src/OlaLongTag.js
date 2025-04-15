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
        text: 'string',
        value: 'string',
        'background-color': 'string',
        'border-color': 'string',
    };

    static defaultAttributes = {
        padding: '2px 0',
        'border-radius': tokens('radius-s'),
    };

    render() {
        return this.renderMJML(`
      <ola-text variant="font-0-regular" color="color-neutral-900" padding="0">
        <div style="
          background-color: ${tokens(this.getAttribute('background-color'))};
          border-radius: ${this.getAttribute('border-radius')};
          border: 1px solid ${tokens(this.getAttribute('border-color'))};
          padding: ${this.getAttribute('padding')};
        ">
          <table width="100%" border="0" cellpadding="0" cellspacing="0" style="min-width:100%">
            <tr>
              <td style="text-align: left; padding-left: ${tokens('size-1')}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${this.getAttribute('text')}
              </td>
              <td style="text-align: right; padding-right: ${tokens('size-1')}; white-space: nowrap;">
                ${this.getAttribute('value')}
              </td>
            </tr>
          </table>
        </div>
      </ola-text>
    `);
    }
}

module.exports = OlaLongTag;
