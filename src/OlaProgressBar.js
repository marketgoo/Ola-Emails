const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');


class OlaProgressBar extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'value': 'string',
        'description': 'string'
    };

    headStyle() {
        return `
        .progress {
            border: solid 1px ${tokens('brand')};
            height: 10px;
            width: 100%;
            min-width: 100px;
            background: ${tokens('white')};
            border-radius: 6px;
            box-sizing: border-box;
            position: relative;
        }
        .progress > span {
            display: block;
            height: 100%;
            background: ${tokens('brand')};
        }
        `
    }

    render() {
        return `
        <table class="ola_progress" style="width:100%">
            <tbody>
                <tr>
                    <td >
                        <div class="progress">
                            <span style="width: ${this.getAttribute('value') || 0}%;"></span>
                        </div>
                    <td/>
                </tr>
                <tr>
                    <td>
                        ${this.renderMJML(this.getContent())}
                    </td>
                </tr>

            </tbody>
        </table>
		`;
    }
}

module.exports = OlaProgressBar;
