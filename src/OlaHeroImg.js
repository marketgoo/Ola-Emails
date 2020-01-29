const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');

registerDependencies({
    'ola-hero': ['ola-hero-img']
});

class OlaHeroImg extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
        href: 'string'
    };

    static defaultAttributes = {
        alt: '',
        href: ''
    };

    render() {
        return this.renderMJML(`
        <mj-section padding-bottom="0">
            <mj-column>
                <mj-image
                    padding="0"
                    src="${this.getAttribute('src')}"
                    alt="${this.getAttribute('alt')}"
                    href="${this.getAttribute('href')}"
                    width="300px"
                ></mj-image>
            </mj-column>
        </mj-section>
	`);
    }
}

module.exports = OlaHeroImg;
