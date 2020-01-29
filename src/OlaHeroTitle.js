const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-hero': ['ola-hero-title']
});

class OlaHeroTitle extends BodyComponent {
    static endingTag = true;

    headStyle(breakpoint) {
        return `
      .ola_hero-title {
        border-radius: ${tokens('radius')} ${tokens('radius')} 0 0;
        background-color: ${tokens('white')};
        padding-right: ${tokens('size-8')};
        padding-left: ${tokens('size-8')};
      }
      @media only screen and (max-width:${breakpoint}) {
        .ola_hero-title {
          border-radius: 0;
          padding-right: ${tokens('size-7')};
          padding-left: ${tokens('size-7')};
        }
      }
    `;
    }

    render() {
        return this.renderMJML(`
        <mj-section
            vertical-align="middle"
            css-class="ola_hero-title"
            padding-top="${tokens('size-8')}"
            padding-bottom="0"
            >
            <mj-column>
              <ola-text variant="headline">
                ${this.getContent()}
              </ola-text>
            </mj-column>
        </section>
	`);
    }
}

module.exports = OlaHeroTitle;
