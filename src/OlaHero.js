const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-body': ['ola-hero'],
});

class OlaHero extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        'background-color': 'string',
    };

    static defaultAttributes = {
        'background-color': 'color-neutral-900',
    };

    headStyle(breakpoint) {
        return `
      .ola_hero-header {
        border-radius: ${tokens('radius-m')} ${tokens('radius-m')} 0 0;
        background-color: ${tokens('color-white')};
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_hero-header {
          border-radius: 0;
          padding-right: ${tokens('size-4')};
          padding-left: ${tokens('size-4')};
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
