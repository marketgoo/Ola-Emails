const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');
const tokens = require('./tokens');

registerDependencies({
  'mj-body': ['ola-divider']
});

class OlaDivider extends BodyComponent {
  static endingTag = true;

  static allowedAttributes = {
    color:
      'enum(color-primary-500,color-white,color-neutral-900,color-neutral-700,color-neutral-400,color-neutral-200,color-neutral-100)',
    margin: 'enum(none,small,normal)'
  };

  static defaultAttributes = {
    color: 'color-neutral-100',
    margin: 'normal'
  };

  render() {
    const color = tokens(this.getAttribute('color'));
    const margin =
      this.getAttribute('margin') === 'small'
        ? tokens('size-3')
        : this.getAttribute('margin') === 'normal'
        ? tokens('size-4')
        : '0';

    return `
        <p style="border-top:solid 4px ${color};font-size:1px;margin:${margin} auto;width:100%;">
        </p>
        `;
  }
}

module.exports = OlaDivider;
