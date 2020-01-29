const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-hero']
});

class OlaHero extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string'
    };

    static defaultAttributes = {
        'background-color': 'black'
    };

    headStyle(breakpoint) {
        return `
      .ola_hero-header {
        border-radius: ${tokens('radius')} ${tokens('radius')} 0 0;
        background-color: ${tokens('white')};
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_hero-header {
          border-radius: 0;
          padding-right: ${tokens('size-7')};
          padding-left: ${tokens('size-7')};
        }
      }
    `;
    }

    render() {
        const color = tokens(this.getAttribute('background-color')) || this.getAttribute('background-color');

        return this.renderMJML(`
    <mj-wrapper
        css-class="ola_hero"
        full-width="full-width"
        background-color="${color}"
        padding="0"
        >
        ${this.getContent()}
    </mj-wrapper>
	`);
    }
}

module.exports = OlaHero;
