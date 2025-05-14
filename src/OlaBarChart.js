const { registerDependencies } = require("mjml-validator");
const { BodyComponent } = require("mjml-core");
const tokens = require('./tokens');

registerDependencies({
    "ola-card": ["ola-bar-chart"],
    "ola-card-content": ["ola-bar-chart"],
    "mj-column": ["ola-bar-chart"],
    "ola-bar-chart": ["ola-text", "ola-tag"],
});

class OlaBarChart extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        labels: "string",
        values: "string",
        height: "string",
    };

    static defaultAttributes = {
        labels: "Lun,Mar,Mié,Jue,Vie",
        values: "40,80,60,100,70",
        height: "60",
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
                padding: 0 8px;
                vertical-align: bottom;
            }
            .ola_bar-chart-bar {
                width: 100%;
                margin: 0 auto;
            }
            .ola_bar-chart-label {
                text-align: center;
                padding-top: 2px;
            }
            .ola_bar-chart-tag {
                text-align: center;
                padding-top: 2px;
            }
        `;
    }

    calculateVariation(current, previous) {
        if (previous === 0) return 0;
        return ((current - previous) / previous) * 100;
    }

    getVariationColor(variation) {
        if (variation > 0) return "color-positive-500";
        if (variation < 0) return "color-negative-500";
        return "color-warning-500";
    }

    formatVariation(variation) {
        const sign = variation > 0 ? "+" : "";
        return `${sign}${Math.round(variation)}%`;
    }

    formatValue(value) {
        const formatter = new Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: 1
        });
        return formatter.format(value);
    }

    renderBar(label, value, barHeight, color, width, isMaxValue = false) {
        const labelText = this.renderMJML(`
            <mj-text
                font-family="Inter, -apple-system, system-ui, sans-serif"
                font-weight="600"
                font-size="14px"
                line-height="20px"
                letter-spacing="0"
                color="${isMaxValue ? tokens('color-positive-500') : tokens('color-neutral-700')}"
                align="center"
            >
                ${label}
            </mj-text>
        `);

        let valueText = '';
        if (value > 0) {
            const formattedValue = this.formatValue(value);
            valueText = this.renderMJML(`
                <mj-text
                    font-family="Inter, -apple-system, system-ui, sans-serif"
                    font-weight="400"
                    font-size="14px"
                    line-height="20px"
                    letter-spacing="0"
                    color="${isMaxValue ? tokens('color-positive-500') : tokens('color-neutral-700')}"
                    align="center"
                >
                    ${formattedValue}
                </mj-text>
            `);
        } else {
            // Mantenemos el espacio con un div vacío de la misma altura
            valueText = '<div style="height: 24px;"></div>';
        }

        return `
            <td class="ola_bar-chart-column" style="width: ${width}%;" valign="bottom">
                <div style="background-color: ${color}; height: ${barHeight}px; width: 100%;" class="ola_bar-chart-bar"></div>
                <div class="ola_bar-chart-label">
                    ${labelText}
                </div>
                <div class="ola_bar-chart-tag">
                    ${valueText}
                </div>
            </td>
        `;
    }

    render() {
        const labels = this.getAttribute("labels").split(",");
        const values = this.getAttribute("values").split(",").map(Number);
        const availableHeight = Math.min(parseInt(this.getAttribute("height")), 100);

        // Calcular el valor máximo para escalar las barras
        const maxValue = Math.max(...values);
        const columnWidth = 100 / labels.length;

        // Generar las barras del gráfico
        let barsHTML = "";
        for (let i = 0; i < labels.length; i++) {
            const barHeight = Math.round((values[i] / maxValue) * availableHeight);
            const color = values[i] === maxValue ? tokens('color-primary-500') : tokens('color-primary-200');
            const isMaxValue = values[i] === maxValue;
            barsHTML += this.renderBar(labels[i], values[i], barHeight, color, columnWidth, isMaxValue);
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
