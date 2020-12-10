const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaKpi extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        title: 'string',
        value: 'string',
        description: 'string'
    };

    headStyle(breakpoint) {
        return `
    .ola_kpi-title {
        margin: 0 0;
    }
    .ola_kpi-value {
        margin: ${tokens('size-3')} 0 0;
    }
    .ola_kpi-description {
        margin: ${tokens('size-1')} 0 0;
    }
    `;
    }

    render() {
        return (`
                <table>
                    <tr>
                        <td style="vertical-align:middle;">
                            <div class="ola_kpi-title">
                                ${this.renderMJML(`
                                <ola-text variant="callout" color="gray" font-weight="regular">
                                    ${this.getAttribute('title')}
                                </ola-text>
                                `)}
                            </div>
                            <div class="ola_kpi-value">
                            ${this.renderMJML(`
                                <ola-text variant="title" color="black">
                                ${this.getAttribute('value')}
                            </ola-text>
                            `)}
                            </div>
                            <div class="ola_kpi-description">
                            ${this.renderMJML(`
                            <ola-text variant="caption" color="gray" font-weight="bold">
                                ${this.getAttribute('description')}
                            </ola-text>
                            `)}
                            </div>
                        </td>
                    </tr>
                </table>
`);
    }
}

module.exports = OlaKpi;
