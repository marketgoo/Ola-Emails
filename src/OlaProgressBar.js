const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaProgressBar extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'value': 'string',
        'description': 'string',
        'disabled': 'boolean',
        'background-color': 'enum(white,gray-xlight)'
    };

    static defaultAttributes = {
        'disabled': false,
        'background-color': 'gray-xlight'
    }

    headStyle() {
        return `
        .progress {
            border: solid 1px;
            height: 10px;
            width: 100%;
            min-width: 100px;
            border-radius: 6px;
            box-sizing: border-box;
            position: relative;
        }
        .progress > span {
            display: block;
            height: 100%;
        }
        `
    }

    render() {
        const background_disabled = this.getAttribute('background-color');
        return `
        <table class="ola_progress" style="width:100%">
            <tbody>
                <tr>
                    <td >
                        <div class="progress" style="border-color: ${this.getAttribute('disabled') ? tokens('gray-xlight') : tokens('brand')}; background-color: ${this.getAttribute('disabled') ? tokens(background_disabled) : tokens('brand')};">
                            <span style="width: ${this.getAttribute('value') || 0}%; background-color: ${tokens('brand')};"></span>
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
