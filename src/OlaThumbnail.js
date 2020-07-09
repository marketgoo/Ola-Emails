const { registerDependencies } = require('mjml-validator');
const { BodyComponent } = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
    'mj-section': ['ola-thumbnail'],
    'mj-body': ['ola-thumbnail'],
});

class OlaThumbnail extends BodyComponent {
    static endingTag = true;

    static allowedAttributes = {
        src: 'string',
        alt: 'string',
        align: 'string',
        'background-color': 'string',
             
    };

    static defaultAttributes = {
        alt: '',
        align: 'center',
        // width:'250px',
    
      
    };
    headStyle(){
      return`
      .ola_thumbnail img {
        border-radius: ${tokens('radius')};
        box-shadow: ${tokens('shadow-2')};
        
      }
      `;
    }
    
  
    render() {
        return this.renderMJML(`
        <mj-section padding-bottom="0">
        <mj-column>
            <mj-image
                css-class = "ola_thumbnail img"
                padding="0"
                src="${this.getAttribute('src')}"
                alt="${this.getAttribute('alt')}"
                width="250px"
                border="10"
                // 'background-color'= "${this.getAttribute('background-color')})"
            > ${this.getContent()}</mj-image>
        </mj-column>
    </mj-section>
      `)
    }
    
}

module.exports = OlaThumbnail;