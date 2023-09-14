const {registerDependencies} = require('mjml-validator');
const {BodyComponent} = require('mjml-core');

registerDependencies({
  'mj-body': ['ola-footer-menu']
});

class OlaFooterMenu extends BodyComponent {
  static endingTag = true;

  render() {
    return this.renderMJML(`
      <mj-section padding-bottom="0">
        <mj-navbar css-class="ola_menu">
          ${this.getContent()}
        </mj-navbar>
      </mj-section>
	`);
  }
}

module.exports = OlaFooterMenu;
