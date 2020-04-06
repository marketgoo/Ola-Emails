const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel': ['ola-panel-text'],
});

const styles = {
    default: {},
    highlight: {
        'background-color': tokens('gray-xlight'),
    },
};

class OlaPanelText extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string',
        color: 'string',
        variant: 'string',
    };

    static defaultAttributes = {
        variant: 'callout',
    };

    render() {
        return this.renderMJML(`
      <ola-panel-section background-color="${this.getAttribute('background-color')}">
        <mj-column>
            <ola-text variant="${this.getAttribute('variant')}" color="${this.getAttribute('color')}">
                ${this.getContent()}
            </ola-text>
        </mj-column>
      </ola-panel-section>
		`);
    }
}

module.exports = OlaPanelText;
