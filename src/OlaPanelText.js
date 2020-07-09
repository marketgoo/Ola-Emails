const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel': ['ola-panel-text'],
    'ola-panel-section': ['ola-panel-text'],
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
        align: 'string',
    };

    static defaultAttributes = {
        variant: 'callout',
        align: 'left',
    };

    render() {
        return this.renderMJML(`
      <ola-panel-section background-color="${this.getAttribute('background-color')}">
        <ola-text variant="${this.getAttribute('variant')}" align="${this.getAttribute('align')}" color="${this.getAttribute('color')}">
            ${this.getContent()}
        </ola-text>
      </ola-panel-section>
		`);
    }
}

module.exports = OlaPanelText;
