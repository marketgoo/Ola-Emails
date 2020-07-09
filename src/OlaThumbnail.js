const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'ola-panel-section': ['ola-thumbnail'],
});

class OlaThumbnail extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
        align: 'string',    
    };

    static defaultAttributes = {
        alt: '',
        align: 'center',
    };

    headStyle(){
      return`
      .ola_thumbnail img {
        border-radius: ${tokens('radius')};
        box-shadow: ${tokens('shadow-2')}; 
      }`;
    }
    
    render() {
        return this.renderMJML(`
        <ola-panel-section>
            <mj-image
                css-class="ola_thumbnail"
                src="${this.getAttribute('src')}"
                alt="${this.getAttribute('alt')}"
                width="250px"
            > ${this.getContent()}</mj-image>
        </ola-panel-section>
      `)
    }   
}

module.exports = OlaThumbnail;