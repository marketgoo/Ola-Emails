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
        colors: "string",
        height: "string",
        title: "string",
    };

    static defaultAttributes = {
        labels: "Lun,Mar,Mié,Jue,Vie",
        values: "40,80,60,100,70",
        colors: "#4C9AFF,#4C9AFF,#4C9AFF,#4C9AFF,#4C9AFF",
        height: "60", // Reducimos la altura por defecto
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
                text-align: center;
                padding-top: 2px;
            }
            .ola_bar-chart-tag {
                text-align: center;
                padding-top: 2px;
            }
        `;
    }

    renderBar(label, value, barHeight, color, width) {
        const labelText = this.renderMJML(`
            <ola-text variant="font-0-regular" color="color-neutral-700" align="center">
                ${label}
            </ola-text>
        `);

        const tagText = this.renderMJML(`
            <ola-tag variant="color-positive-500" size="small">
                ${value}
            </ola-tag>
        `);

        return `
            <td class="ola_bar-chart-column" style="width: ${width}%;" valign="bottom">
                <div style="background-color: ${color}; height: ${barHeight}px; width: 100%;" class="ola_bar-chart-bar"></div>
                <div class="ola_bar-chart-label">
                    ${labelText}
                </div>
                <div class="ola_bar-chart-tag">
                    ${tagText}
                </div>
            </td>
        `;
    }

    render() {
        const labels = this.getAttribute("labels").split(",");
        const values = this.getAttribute("values").split(",").map(Number);
        const colors = this.getAttribute("colors").split(",");
        // Reducimos la altura disponible para las barras
        // La altura total disponible es 116px (OlaCardContent height)
        // Reservamos ~56px para etiquetas (16px), tag (16px) y espaciado (24px)
        const availableHeight = Math.min(parseInt(this.getAttribute("height")), 50);
        const title = this.getAttribute("title");

        // Calcular el valor máximo para escalar las barras
        const maxValue = Math.max(...values);
        const columnWidth = 100 / labels.length;

        // Generar las barras del gráfico
        let barsHTML = "";
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
