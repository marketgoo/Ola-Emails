const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-card-content': ['ola-bar-chart'],
    'mj-column': ['ola-bar-chart'],
});

class OlaBarChart extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'labels': 'string',
        'values': 'string',
        'colors': 'string',
        'height': 'string',
    };

    static defaultAttributes = {
        'labels': 'Lun,Mar,Mié,Jue,Vie',
        'values': '40,80,60,100,70',
        'colors': '#4C9AFF,#4C9AFF,#4C9AFF,#4C9AFF,#4C9AFF',
        'height': '80', // Altura por defecto para las barras
    };

    headStyle() {
        return `
            .ola_bar-chart-container {
                width: 100%;
                height: 100%;
                display: table;
            }
            .ola_bar-chart {
                width: 100%;
                table-layout: fixed;
                border-spacing: 0;
                border-collapse: collapse;
            }
            .ola_bar-chart-column {
                padding: 0 1px;
                vertical-align: bottom;
            }
            .ola_bar-chart-bar {
                width: 100%;
                margin: 0 auto;
            }
            .ola_bar-chart-label {
                font-family: ${tokens('font-family')};
                font-size: ${tokens('font-0-regular', 'font-size')};
                color: ${tokens('color-neutral-700')};
                text-align: center;
                padding-top: 3px;
            }
        `;
    }

    renderBar(label, value, barHeight, color, width) {
        return `
            <td class="ola_bar-chart-column" style="width: ${width}%;" valign="bottom">
                <div style="background-color: ${color}; height: ${barHeight}px; width: 100%;" class="ola_bar-chart-bar"></div>
                <div class="ola_bar-chart-label">${label}</div>
            </td>
        `;
    }

    render() {
        const labels = this.getAttribute('labels').split(',');
        const values = this.getAttribute('values').split(',').map(Number);
        const colors = this.getAttribute('colors').split(',');
        // Calculamos la altura disponible para las barras considerando el espacio para etiquetas y título
        // La altura total disponible es 116px (OlaCardContent height)
        // Reservamos ~30px para etiquetas (16px) y título (14px)
        const availableHeight = Math.min(parseInt(this.getAttribute('height')), 80);
        const title = this.getAttribute('title');
        
        // Calcular el valor máximo para escalar las barras
        const maxValue = Math.max(...values);
        const columnWidth = 100 / labels.length;
        
        // Generar las barras del gráfico
        let barsHTML = '';
        for (let i = 0; i < labels.length; i++) {
            const barHeight = Math.round((values[i] / maxValue) * availableHeight);
            const color = colors[i % colors.length];
            barsHTML += this.renderBar(labels[i], values[i], barHeight, color, columnWidth);
        }

        return `
            <div class="ola_bar-chart-container" style="width: 100%; padding: 0; margin: 0;">
                <table class="ola_bar-chart" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                    <tr>
                        ${barsHTML}
                    </tr>
                </table>
            </div>
        `;
    }
}

module.exports = OlaBarChart;
