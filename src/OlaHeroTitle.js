const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-hero': ['ola-hero-title'],
});

class OlaHeroTitle extends BodyComponent {
    static endingTag = true;

    headStyle(breakpoint) {
        return `
      .ola_hero-title {
        border-radius: ${tokens('radius-m')} ${tokens('radius-m')} 0 0;
        background-color: ${tokens('color-white')};
        padding-right: ${tokens('size-5')};
        padding-left: ${tokens('size-5')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_hero-title {
          border-radius: 0;
          padding-right: ${tokens('size-4')};
          padding-left: ${tokens('size-4')};
        }
      }
    `;
    }

    render() {
        return this.renderMJML(`
        <mj-section
            vertical-align="middle"
            css-class="ola_hero-title"
            padding-top="${tokens('size-5')}"
            padding-bottom="0"
            >
            <mj-column>
              <ola-text variant="font-3-regular">
                ${this.getContent()}
              </ola-text>
            </mj-column>
        </section>
	`);
    }
}

module.exports = OlaHeroTitle;
