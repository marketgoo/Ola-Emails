import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';
import tokens from '../tokens';

registerDependencies({
    'mj-body': ['ola-hero']
});

export default class OlaHero extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string'
    };

    render() {
        return this.renderMJML(`
    <mj-wrapper ${this.htmlAttributes({
        'css-class': 'ola_hero',
        'full-width': 'full-width',
        'background-color': tokens('black'),
        padding: 0
    })}>
        ${this.getContent()}
    </mj-wrapper>
	`);
    }
}
