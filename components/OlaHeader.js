import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-body': ['ola-header']
});

export default class OlaHeader extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        href: 'string',
        src: 'string',
        alt: 'string'
    };

    static defaultAttributes = {
        href: '#'
    };

    headStyle() {
        return `
      .ola_header a {
        color: inherit;
      }
    `;
    }

    render() {
        return this.renderMJML(`
    <mj-section vertical-align="middle" css-class="ola_header">
        <mj-column vertical-align="middle">
            <mj-image ${this.htmlAttributes({
                width: '154px',
                align: 'left',
                src: this.getAttribute('src'),
                href: this.getAttribute('href'),
                alt: this.getAttribute('alt')
            })}></mj-image>
        </mj-column>
        <mj-column vertical-align="middle">
            <ola-text variant="caption" color="gray" align="right">
                ${this.getContent()}
            </ola-text>
        </mj-column>
    </mj-section>
	`);
    }
}
