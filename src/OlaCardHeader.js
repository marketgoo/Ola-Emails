const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

registerDependencies({
    'ola-card': ['ola-card-header'],
    'mj-wrapper': ['ola-card-header'],
    'ola-card-header': ['ola-text'],
});

class OlaCardHeader extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        imgSrc: 'string',
        'icon-width': 'string',
        color: 'string',
    };

    static defaultAttributes = {
        'icon-width': '24px',
        color: 'color-neutral-700',
    };

    headStyle() {
        return `
      .ola_card-header {
        display: table;
        width: 100%;
      }
      
      .ola_card-header-icon {
        display: table-cell;
        vertical-align: middle;
        padding-right: 4px;
        width: 32px;
      }
      
      .ola_card-header-text {
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }
    `;
    }

    render() {
        const content = this.getContent();
        const processedContent = this.renderMJML(`<mj-column>${content}</mj-column>`);

        return this.renderMJML(`
      <mj-section padding="16px">
        <mj-column>
          <mj-table css-class="ola_card-header" padding="0" width="100%">
            <tr>
              <td class="ola_card-header-icon" style="width: ${this.getAttribute('icon-width')};">
                <img width="${this.getAttribute('icon-width')}" src="${this.getAttribute('imgSrc')}" style="display: block;" />
              </td>
              <td class="ola_card-header-text">
                ${processedContent}
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>
    `);
    }
}

module.exports = OlaCardHeader;
