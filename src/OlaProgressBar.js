const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');
const tokens = require('./tokens');

class OlaProgressBar extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    value: 'string',
    disabled: 'boolean',
    'background-color': 'enum(color-white,color-neutral-200)'
  };

  static defaultAttributes = {
    disabled: false,
    'background-color': 'color-neutral-200'
  };

  headStyle() {
    return `
        .progress {
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
        `;
  }

  render() {
    const background_disabled = this.getAttribute('background-color');
    return `
        <table class="ola_progress" style="width:100%">
            <tbody>
                <tr>
                    <td >
                        <div class="progress" style="border: ${
                          this.getAttribute('disabled')
                            ? 'none'
                            : `solid 1px ${tokens('color-primary-500')}`
                        }; background-color: ${
      this.getAttribute('disabled')
        ? tokens(background_disabled)
        : tokens('color-white')
    };">
                            <span style="width: ${
                              this.getAttribute('value') || 0
                            }%; background-color: ${tokens(
      'color-primary-500'
    )};"></span>
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
