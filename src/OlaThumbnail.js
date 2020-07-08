const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-section': ['ola-thumbnail-img'],
});

class OlaThumbnail extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
    };

    static defaultAttributes = {
        alt: '',
        'background-color': 'black',
    };
    
    renderImage() {
      return `
        <mj-column
          ${this.htmlAttributes({
            width: this.getAttribute('column-width'),
            'background-color': this.getAttribute('background-color')
          })}
        >
          <mj-image
            src="${this.getAttribute('src')}"
            alt="${this.getAttribute('alt')}"
            width="300px"
            })
          >
          </mj-image>
      </mj-column>
      `
    }

    renderText() {
      return `
        <mj-column
          ${this.htmlAttributes({
            width: this.getAttribute('column-width'),
            'background-color': this.getAttribute('background-color')
          })}
        >
          <mj-text
            ${this.htmlAttributes({
              color: this.getAttribute('color'),
              'font-size': this.getAttribute('font-size'),
            })}
          >
            ${this.getContent()}
          </mj-text>
        </mj-column>
      `
    }


    render() {
      const content = [this.renderText(), this.renderImage()]
       const orderedContent = this.getAttribute('image-position') === 'right' ? content : reverse(content)
    
        return this.renderMJML(`
          <mj-section
                ${this.htmlAttributes({
                  'background-color': this.getAttribute('background-color')
                })}
            >
                ${orderedContent}
                
        </mj-section>
      `)
    }
    
}

module.exports = OlaThumbnail;