const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

class OlaCounter extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string',
        'color': 'string',
    };

    static defaultAttributes = {
        'background-color': 'accent',
        'color': 'white',
    };

    headStyle() {
        return `
      .ola_counter {
        border-radius: 50%;
        width: ${tokens('size-8')};
        height: ${tokens('size-8')};
        padding: ${tokens('size-3')};
        margin: auto auto 10px auto;
      }
      .ola_counter > div {
          margin-top: -2px;
      }
    `;
    }

    render() {
        return `
            <div class="ola_counter" style="background-color:${tokens(this.getAttribute('background-color'))}">
                ${this.renderMJML(`
                <ola-text ${this.htmlAttributes({
                    'variant': 'title',
                    'align': 'center',
                    'color': this.getAttribute('color'),
                })}>
                    ${this.getContent()}
                </ola-text>
                `)}
            </div>
		`;
    }
}

module.exports = OlaCounter;
