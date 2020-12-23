const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaKpi extends BodyComponent {

    static allowedAttributes = {
        title: 'string',
        description: 'string',
        variant: 'enum(brand,white,black,gray,gray-light,error,warning,success,pro,premium)'
    };

    static defaultAttributes = {
        description: '',
        variant: 'gray'
    }

    headStyle() {
        return `
    .ola_kpi-value span {
            font-size: ${tokens('size-7')};
    }
    `;
    }

    render() {
        return (`
                <table style="table-layout: fixed; width:200px">
                    <thead>
                        <tr>
                            <td colspan="2" style="vertical-align:middle;">
                                ${this.renderMJML(`
                                    <ola-text variant="callout" color="gray" align="center">
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
                                <ola-text variant="caption" color=${this.getAttribute('variant')} font-weight="bold" align="center">
                                ${this.getAttribute('description')}
                                </ola-text>
                                `)}
                            </td>
                        </tr>
                    </tbody>
                </table>
`);
    }
}

module.exports = OlaKpi;
