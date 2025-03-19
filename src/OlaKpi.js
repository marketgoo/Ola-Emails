const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaKpi extends BodyComponent {
    static allowedAttributes = {
        title: 'string',
        description: 'string',
        variant:
            'enum(color-primary-500,color-white,color-neutral-900,color-neutral-700,color-neutral-400,color-negative-500,color-warning-500,color-positive-500,color-pro-500,color-premium)',
    };

    static defaultAttributes = {
        description: '',
        variant: 'color-neutral-700',
    };

    headStyle() {
        return `
    .ola_kpi-value span {
        font-size: ${tokens('font-3-regular', 'font-size')};
        font-family: ${tokens('font-3-regular', 'font-family')};
        line-height: ${tokens('font-3-regular', 'line-height')};
    }
    `;
    }

    render() {
        return `
                <table style="table-layout: fixed; width:200px">
                    <thead>
                        <tr>
                            <td colspan="2" style="vertical-align:middle;">
                                ${this.renderMJML(`
                                    <ola-text variant="font-1-regular" color="color-neutral-700" align="center">
                                        ${this.getAttribute('title')}
                                    </ola-text>
                                `)}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="2" class="ola_kpi-value" style="vertical-align:middle;">
                                ${this.renderChildren()}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="vertical-align:middle;">
                                ${this.renderMJML(`
                                <ola-text variant="font-0-regular" color=${this.getAttribute(
                                    'variant',
                                )} font-weight="font-weight-bold" align="center">
                                ${this.getAttribute('description')}
                                </ola-text>
                                `)}
                            </td>
                        </tr>
                    </tbody>
                </table>
`;
    }
}

module.exports = OlaKpi;
