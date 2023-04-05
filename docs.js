const mjml2html = require('mjml');
const tokens = require('./src/tokens');
const fs = require('fs');

require('./index');

const ALL_COLORS = ["brand","white","black","gray","gray-light","gray-xlight","gray-xxlight","error","warning","success","pro","premium"];

const docs = {
  title: 'Ola-Emails Docs',
  components: [
    {
      name: 'OlaButton',
      tag: "ola-button",
      attrs: [
        {
          name: 'variant',
          type: 'enum',
          values: ['primary', 'secondary', 'link'],
          default: 'secondary',
        },
        {
          name: 'align',
          type: 'enum',
          values: ['left', 'center', 'right'],
          default: 'center',
        },
        {
          name: 'href',
          type: 'string',
          default: '',
        }
      ],
      example: `  <ola-button
    variant="primary"
    href="https://...."
    align="left">
    Button Text
  </ola-button>`,
    },
    {
      name: "OlaCircle",
      tag: "ola-circle",
      attrs: [
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
          default: "black",
        },
        {
          name: "size",
          type: "enum",
          values: ["small","medium","big"],
          default: "big",
        }
      ],
      example: `  <ola-circle
    background-color="pro"
    color="white"
    size="medium">
      7
  </ola-circle>`,
    },
    {
      name: "OlaCounter",
      tag: "ola-counter",
      attrs: [
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "gray",
        },
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
          default: "black",
        },
        {
          name: "number",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        }
      ],
      example: `  <ola-counter
      background-color="success"
      color="white"
      number="2"
      title="We'll calculate your SEO score">
      <ola-text
          variant="caption"
          color="gray">
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Suspendisse luctus vestibulum 
          aliquam...</p>
      </ola-text>
  </ola-counter>`
    },
    {
      name: "OlaDivider",
      tag: "ola-divider",
      attrs: [
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
          default: "gray-xxlight",
        },
        {
          name: "margin",
          type: "enum",
          values: ["none","small","normal"],
          default: "normal",
        }
      ],
      example: ` <ola-divider
      color="brand" 
      margin="small"></ola-divider>`
    },
    {
      name: "OlaFooterAddress",
      tag: "ola-footer-address",
      attrs: [
        {
          name: "src",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "alt",
          type: "string",
        }
      ],
      example: `  <ola-footer-address 
      src="https://marketgoo.github.io/Ola-Emails/img/logo-gray.png"
      href="https://www.marketgoo.com"
      alt="Marketgoo">
      Malatones, 63, 28110 Algete. Madrid. Spain
  </ola-footer-address>`
    },
    {
      name: "OlaFooterMenu",
      tag: "ola-footer-menu",
      attrs: [],
      subcomponents: ["ola-footer-menu-link", "ola-footer-menu-icon"],
      example: `  <ola-footer-menu>
      <ola-footer-menu-link 
          href="https://marketgoo.com/">
          Contact Us
      </ola-footer-menu-link>
      <ola-footer-menu-link 
          href="https://marketgoo.com/">
          Privacy Policy
      </ola-footer-menu-link>
  </ola-footer-menu>

  <ola-footer-menu>
      <ola-footer-menu-icon 
          src="https://marketgoo.github.io/Ola-Emails/img/social-instagram.png" 
          href="https://marketgoo.com/" />
      <ola-footer-menu-icon 
          src="https://marketgoo.github.io/Ola-Emails/img/social-linkedin.png" 
          href="https://marketgoo.com/" />
  </ola-footer-menu>`
    },
    {
      name: "OlaFooterMenuLink",
      tag: "ola-footer-menu-link",
      attrs: [
        {
          name: "href",
          type: "string",
        }
      ],
      parent: "ola-footer-menu",
      example: `  <ola-footer-menu-link 
      href="https://marketgoo.com/">
      Contact Us
  </ola-footer-menu-link>
  <ola-footer-menu-link 
      href="https://marketgoo.com/">
      Privacy Policy
  </ola-footer-menu-link>`
    },
    {
      name: "OlaFooterMenuIcon",
      tag: "ola-footer-menu-icon",
      attrs: [
        {
          name: "src",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "alt",
          type: "string",
        }
      ],
      parent: "ola-footer-menu",
      example: `  <ola-footer-menu-icon 
      src="https://marketgoo.github.io/Ola-Emails/img/social-instagram.png" 
      href="https://marketgoo.com/" />
  <ola-footer-menu-icon 
      src="https://marketgoo.github.io/Ola-Emails/img/social-linkedin.png" 
      href="https://marketgoo.com/" />`
    },
    {
      name: "OlaFooterMessage",
      tag: "ola-footer-message",
      attrs: [],
      parent: "ola-footer",
      example: `  <ola-footer-message>
      You recived this message as part of the service 
      provided by <strong>marketgoo</strong>. We hope 
      you enjoy it but if you have any problem, please
       <a href="https://www.marketgoo.com/contact-us/">leave us feedback.</a>
  </ola-footer-message>`
    },
    {
      name: "OlaHeader",
      tag: "ola-header",
      attrs: [
        {
          name: "variant",
          type: "enum",
          values: ["light", "dark"],
          default: "light",
        },
        {
          name: "text",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        },
        {
          name: "logo",
          type: "string",
        }
      ],
      example: `  <ola-header
      variant="light" 
      logo="https://marketgoo.github.io/Ola-Emails/img/logo-brand.png"
      href="https://www.marketgoo.com/"
      text="Link to Marketgoo" />`
    },
    {
      name: "OlaHero",
      tag: "ola-hero",
      attrs: [
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "black",
        }
      ],
      subcomponents: ["ola-hero-img", "ola-hero-title"],
      example: `  <ola-hero>
      <ola-hero-img
          src="https://marketgoo.github.io/Ola-Emails/img/promo.png"
          alt="Rocket Image"
          href="https://www.marketgoo.com" />
      <ola-hero-title>
          Welcome to marketgoo, Jennifer
      </ola-hero-title>
  </ola-hero>`
    },
    {
      name: "OlaHeroImg",
      tag: "ola-hero-img",
      attrs: [
        {
          name: "src",
          type: "string",
        },
        {
          name: "alt",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        }
      ],
      parent: "ola-hero",
      example: `  <ola-hero-img
      src="https://marketgoo.github.io/Ola-Emails/img/promo.png"
      alt="Rocket Image"
      href="https://www.marketgoo.com" />`
    },
    {
      name: "OlaHeroTitle",
      tag: "ola-hero-title",
      attrs: [],
      parent: "ola-hero",
      example: `  <ola-hero-title>
      Welcome to marketgoo, Jennifer
  </ola-hero-title>`
    },
    {
      name: "OlaIcon",
      tag: "ola-icon",
      attrs: [
        {
          name: "icon",
          type: "string",
        },
        {
          name: "variant",
          type: "enum",
          values: ["small","medium","big"],
          default: "big",
        }
      ],
      example: `  <ola-icon
      icon="https://marketgoo.github.io/Ola-Emails/img/task-warning.png"
      variant="medium"></ola-icon>`
    },
    {
      name: "OlaIssue",
      tag: "ola-issue",
      attrs: [
        {
          name: "icon",
          type: "string",
        }
      ],
      example: `  <ola-issue
      icon="https://marketgoo.github.io/Ola-Emails/img/task-error.png">This is an issue</ola-issue>`
    },
    {
      name: "OlaItemList",
      tag: "ola-item-list",
      attrs: [
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "white",
        }
      ],
      example: `  <ola-item-list
      background-color="premium">
      <ola-icon
          icon="https://marketgoo.github.io/Ola-Emails/img/task-warning.png"> </ola-icon>
      <ola-text
          variant="body"
          font-weight="bold">Lorem ipsum</ola-text>
      <ola-text 
          variant="caption" 
          color="gray">Hello World!</ola-text>
  </ola-item-list>`
    },
    {
      name: "OlaKpi",
      tag: "ola-kpi",
      attrs: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "variant",
          type: "enum",
          values: ALL_COLORS,
          default: "gray",
        }
      ],
      example: `  <ola-kpi 
      title="Your monthly visits coming from SEO" 
      description="Lorem ipsum">
      <ola-text 
          variant="title" 
          color="black" 
          align="center">243 <span>visits</span></ola-text>
  </ola-kpi>`
    },
    {
      name: "OlaPanel",
      tag: "ola-panel",
      attrs: [
        {
          name: "close-to",
          type: "enum",
          values: ["top"],
        },
        {
          name: "overlap",
          type: "boolean",
          default: "false",
        }
      ],
      subcomponents: ["ola-panel-title", "ola-panel-section", "ola-panel-text", "ola-panel-signature"],
      example: `  <ola-panel 
      overlap=false 
      close-to="top">
      <ola-panel-title>
        Hi Bowie, <br /> This is your July SEO report
        for your site example.com
      </ola-panel-title>

      <ola-panel-section>
          <ola-text variant="callout" color="gray">
            If you want more site traffic, you need to 
            work on your SEO. It does take work, patience 
            & commitment - but you don't have to do it 
            yourself.
          </ola-text>
      </ola-panel-section>

      <ola-panel-text variant="caption" color="gray">
        If you have any question, feel free 
        to email our customer success team,</a> we're 
        lightning quick at replying.
      </ola-panel-text>

      <ola-panel-signature 
          src="https://marketgoo.github.io/Ola-Emails/img/person.jpg" 
          title="Big thanks!" 
          subtitle="David Roch and the marketgoo team" />
  </ola-panel>`
    },
    {
      name: "OlaPanelTitle",
      tag: "ola-panel-title",
      attrs: [
        {
          name: "variant",
          type: "enum",
          values: ["title", "headline", "body"],
          default: "body",
        },
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
          default: "black"
        },
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "white"
        }
      ],
      parent: "ola-panel",
      example: `  <ola-panel-title
      variant="headline"
      color="brand"
      background-color="gray-light">
      Hi Bowie, <br /> This is your July SEO report
      for your site example.com
  </ola-panel-title>`
    },
    {
      name: "OlaPanelSection",
      tag: "ola-panel-section",
      attrs: [
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
        },
        {
          name: "multicolumn",
          type: "boolean",
          default: "false",
        }
      ],
      parent: "ola-panel",
      example: `  <ola-panel-section
      background-color="gray-light"
      multicolumn=false>
      <ola-text variant="body">
        If you want more site traffic, you need to 
        work on your SEO. It does take work, patience 
        & commitment - but you don't have to do it 
        yourself.
      </ola-text>
  </ola-panel-section>`
    },
    {
      name: "OlaPanelText",
      tag: "ola-panel-text",
      attrs: [
        {
          name: "variant",
          type: "enum",
          values: ["display","title","headline","body","callout","caption"],
          default: "callout",
        },
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
        },
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
        },
        {
          name: "align",
          type: "enum",
          values: ["left", "center", "right"],
          default: "left",
        }
      ],
      parent: "ola-panel",
      example: `  <ola-panel-text 
      variant="caption" 
      color="pro"
      background-color="gray-light"
      align="center">
      If you have any question, feel free 
      to email our customer success team,</a> we're 
      lightning quick at replying.
  </ola-panel-text>`
    },
    {
      name: "OlaPanelSignature",
      tag: "ola-panel-signature",
      attrs: [
        {
          name: "src",
          type: "string",
        },
        {
          name: "alt",
          type: "string",
        },
        {
          name: "title",
          type: "string",
        },
        {
          name: "subtitle",
          type: "string",
        },
      ],
      parent: "ola-panel",
      example: `  <ola-panel-signature 
      src="https://marketgoo.github.io/Ola-Emails/img/person.jpg" 
      alt="Signature"
      title="Big thanks!" 
      subtitle="David Roch and the marketgoo team" />`
    },
    {
      name: "OlaProgressBar",
      tag: "ola-progress-bar",
      attrs: [
        {
          name: "value",
          type: "string",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
        },
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "gray-xlight",
        }
      ],
      example: `  <ola-progress-bar 
      value="20"
      background-color="gray-xlight"
      disabled=false>
      <ola-text variant="caption" color="gray">
        We're still collecting data on this competitor. 
        We'll share it soon
      </ola-text>
  </ola-progress-bar>`
    },
    {
      name: "OlaScore",
      tag: "ola-score",
      attrs: [
        {
          name: "title",
          type: "string",
          default: "Your score",
        },
        {
          name: "value",
          type: "integer",
          default: 50,
        },
        {
          name: "level",
          type: "string",
          default: "medium",
        },
        {
          name: "src-prefix",
          type: "string",
          default: "https://apps.marketgoo.com/assets/themes/10edfa953b/mktgoo/charts/score/",
        }
      ],
      example: `  <ola-score 
      title="Your score" 
      value="60" 
      level="medium"
      src-prefix="https://apps.marketgoo.com/assets/themes/10edfa953b/mktgoo/charts/score/"></ola-score>`
    },
    {
      name: "OlaTable",
      tag: "ola-table",
      attrs: [],
      subcomponents: ["ola-table-row"],
      example: `  <ola-table>
      <ola-table-row>
          <ola-table-cell header=true>
              <ola-text>Type</ola-text>
          </ola-table-cell>
          <ola-table-cell header=true>
              <ola-text>Description</ola-text>
          </ola-table-cell>
      </ola-table-row>
      <ola-table-row>
          <ola-table-cell>
              <ola-text>Enum</ola-text>
          </ola-table-cell>
          <ola-table-cell>
              <ola-text>Type of something...</ola-text>
          </ola-table-cell>
      </ola-table-row>
  </ola-table>`
    },
    {
      name: "OlaTableRow",
      tag: "ola-table-row",
      attrs: [],
      parent: "ola-table",
      subcomponents: ["ola-table-cell"],
      example: `  <ola-table>
      <ola-table-row>
          <ola-table-cell>
              <ola-text>One cell</ola-text>
          </ola-table-cell>
          <ola-table-cell>
              <ola-text>Cell example...</ola-text>
          </ola-table-cell>
      </ola-table-row>
  </ola-table>`
    },
    {
      name: "OlaTableCell",
      tag: "ola-table-cell",
      attrs: [
        {
          name: "header",
          type: "boolean",
          default: "false",
        },
        {
          name: "highlight",
          type: "boolean",
          default: "false",
        },
        {
          name: "background-color",
          type: "enum",
          values: ALL_COLORS,
          default: "gray-xxlight",
        },
        {
          name: "align",
          type: "enum",
          values: ["left", "center", "right"],
          default: "center",
        },
        {
          name: "padding",
          type: "string",
          default: "15px 0",
        },
        {
          name: "width",
          type: "string",
          default: "auto",
        }
      ],
      parent: "ola-table-row",
      example: `  <ola-table>
      <ola-table-row>
          <ola-table-cell>
              <ola-text
                  header=false
                  highlight=false
                  background-color="brand"
                  align="center"
                  padding="16px"
                  width="100px">
                  Cell example...
              </ola-text>
          </ola-table-cell>
      </ola-table-row>
  </ola-table>`
    },
    {
      name: "OlaTag",
      tag: "ola-tag",
      attrs: [
        {
          name: "variant",
          type: "enum",
          values: ALL_COLORS,
        },
        {
          name: "size",
          type: "enum",
          values: ["small","medium","big"],
          default: "small",
        }
      ],
      example: `  <ola-tag 
      variant="brand" 
      size="medium">
      50%
  </ola-tag>`
    },
    {
      name: "OlaText",
      tag: "ola-text",
      attrs: [
        {
          name: "variant",
          type: "enum",
          values: ["display","title","headline","body","callout","caption"],
          default: "body",
        },
        {
          name: "align",
          type: "enum",
          values: ["left", "center", "right"],
          default: "left",
        },
        {
          name: "color",
          type: "enum",
          values: ALL_COLORS,
          default: "black",
        },
        {
          name: "vertical-align",
          type: "enum",
          values: ["top", "middle", "bottom"],
        },
        {
          name: "height",
          type: "string",
        },
        {
          name: "font-weight",
          type: "enum",
          values: ["regular", "bold"],
        }
      ],
      example: `  <ola-text 
      variant="body" 
      align="center"
      color="pro" 
      vertical-align="middle"
      height="40px"
      font-weight="bold">
      Did you know that?
  </ola-text>`
    },
    {
      name: "OlaThumbnail",
      tag: "ola-thumbnail",
      attrs: [
        {
          name: "src",
          type: "string",
        },
        {
          name: "alt",
          type: "string",
        }
      ],
      example: `  <ola-thumbnail
      src="https://marketgoo.github.io/Ola-Emails/img/promo.png"
      alt="Thumbnail Image" />`
    },
    {
      name: "OlaWrapper",
      tag: "ola-wrapper",
      attrs: [
        {
          name: "padding",
          type: "string",
          default: "0",
        }
      ],
      example: `  <ola-wrapper padding="10px">
      <ola-text>
        This is a text in a wrapper
      </ola-text>
  </ola-wrapper>`
    }
  ]
}

const createDocs = () => {
  let doc = `
  <mjml>
    <mj-head>
      <ola-head></ola-head>
      <mj-title>${docs.title}</mj-title>
      <mj-preview>${docs.title}</mj-preview>

      <mj-style inline="inline">
        .body {
          padding-bottom: 200px;
        }
      </mj-style>
    </mj-head>

    <mj-body css-class="body">
      <ola-header
        logo="https://marketgoo.github.io/Ola-Emails/img/logo-brand.png"
      />

      <mj-wrapper>
        <ola-text>
          <h1 id="ola-button">${docs.title}</h1>
        </ola-text>
      </mj-wrapper>

      <mj-wrapper>`;

  docs.components.forEach(comp => {
    doc += `
    <ola-text height="32px" font-weight="bold">
      - <a href="#${comp.tag}">${comp.name}</a>
    </ola-text>`;
  });

  doc += `</mj-wrapper>`;

  docs.components.forEach(comp => {
    doc += `
    <mj-wrapper>
      <ola-text>
        <h2 id="${comp.tag}">🎨 ${comp.name}</h2>
      </ola-text>

      <ola-text variant="body" height="36px" font-weight="bold">
        <p>🫴 Example of use</p>
      </ola-text>

      <mj-wrapper background-color="#fff" padding="0" border-radius="5px">
        <ola-text variant="callout">
          <pre>${comp.example.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(https?:\/\/[^\s]+)/g, 'https://[...]"')}</pre>
        </ola-text>
      </mj-wrapper>

      <mj-wrapper padding-top="16px">
        ${comp.example}
      </mj-wrapper>

      ${
        comp.parent
          ? `
          <mj-wrapper padding-top="32px" padding-bottom="0">
            <ola-text variant="body" font-weight="bold">
              <p>⬆️ Parent Component</p>
            </ola-text>
          </mj-wrapper>

          <mj-wrapper>
            <ola-text variant="body" font-weight="bold"> - <a href="#${comp.parent}"><code>&lt;${comp.parent}&gt;</code></a></ola-text>
          </mj-wrapper>`
          : ""

      }

      ${
        comp.subcomponents?.length
        ? `
        <mj-wrapper padding-top="32px" padding-bottom="0">
          <ola-text variant="body" font-weight="bold">
            <p>👶 Subcomponents</p>
          </ola-text>
        </mj-wrapper>

        <mj-wrapper>
          ${comp.subcomponents.map(scomp => {
            return `
              <ola-text variant="body" font-weight="bold"> - <a href="#${scomp}"><code>&lt;${scomp}&gt;</code></a></ola-text>
              `;
          })}
        </mj-wrapper>
        `
        : ""
      }

      ${
        comp.attrs?.length
        ? `
      <mj-wrapper padding-top="32px">
        <ola-text variant="body" font-weight="bold">
          <p>⚙️ Attributes</p>
        </ola-text>
      </mj-wrapper>

      <ola-table>
        <ola-table-row>
          <ola-table-cell width="120px">
            <ola-text variant="callout" font-weight="bold">Name</ola-text>
          </ola-table-cell>
          <ola-table-cell width="60px">
            <ola-text variant="callout" font-weight="bold">Type</ola-text>
          </ola-table-cell>
          <ola-table-cell>
            <ola-text variant="callout" font-weight="bold">Allowed</ola-text>
          </ola-table-cell>
          <ola-table-cell>
            <ola-text variant="callout" font-weight="bold">Default</ola-text>
          </ola-table-cell>
        </ola-table-row>
      ${
        comp.attrs.map(attr => {
          return `
          <ola-table-row>
            <ola-table-cell>
              <ola-text variant="caption"><code>${attr.name}</code></ola-text>
            </ola-table-cell>
            <ola-table-cell>
              <ola-text variant="caption">${attr.type}</ola-text>
            </ola-table-cell>
            <ola-table-cell>
              <ola-text variant="caption"><code>${attr.values?.join(",") || ""}</code></ola-text>
            </ola-table-cell>
            <ola-table-cell>
              <ola-text variant="caption"><code>${attr.default || ""}</code></ola-text>
            </ola-table-cell>
          </ola-table-row>`;
        })
      }
      </ola-table>
      `
      : `
      <mj-wrapper padding-top="32px">
        <ola-text variant="body" font-weight="bold">
          <p>⚙️ No attributes supported</p>
        </ola-text>
      </mj-wrapper>
      `
    }

    </mj-wrapper>

    <mj-divider border-width="2px" border-style="dashed" border-color="lightgrey" />
    `;
  });

  doc += `
    </mj-body>
  </mjml>`;
  
  const result = mjml2html(tokens.replace(doc), {
    validationLevel: 'soft',
    filePath: './demo/'
  });

  fs.writeFileSync('./demo/docs.html', result.html);
}

createDocs();