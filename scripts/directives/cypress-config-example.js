const vm = require('vm')
const endent = require('endent').default

const replacer = (key, value) => {
  if (typeof value === 'function') {
    throw new Error(`Function values not supported in json: ${key}`)
  }

  return value
}

function processNode(node, { _require, error, warn }) {
  const helpers = _require(__dirname, './helpers/example-helpers')
  const { attributes, children } = helpers.getNodeProperties(node)
  const { errorArgs, header, body } = helpers.getHeaderAndBody(children)
    
  if (errorArgs) {
    return error(...errorArgs)
  }
  
  const showConfigJson = !header && !attributes.noJson
  let configObj

  if (showConfigJson) {
    try {
      configObj = vm.runInNewContext(`(${body})`, {})
    } catch (err) {
      return error(`Unable to parse code`, err)
    }
  }

  let jsonBody = false

  if (showConfigJson) {
    try {
      jsonBody = JSON.stringify(configObj, replacer, 2)
    } catch (err) {
      warn(`${err.message} (skipping cypress.json tab)`)
    }
  }

  const isBaseUrl = 'isBaseUrl' in attributes
  let testTypeCommentOrProp = isBaseUrl
    ? endent`
        // setupNodeEvents can be defined in either
        // the e2e or component configuration
        e2e: ${body}
      `
    : endent`
    ${body}
    `

  return helpers.getCodeGroup(
    {
      label: 'cypress.config.js',
      language: 'js',
      body: endent`
        const { defineConfig } = require('cypress')
        ${header}
        module.exports = defineConfig({
          ${testTypeCommentOrProp}
        })
      `,
    },
    {
      label: 'cypress.config.ts',
      language: 'ts',
      body: endent`
        import { defineConfig } from 'cypress'
        ${header}
        export default defineConfig(${testTypeCommentOrProp})
      `,
    },
    {
      label: 'cypress.json (deprecated)',
      language: 'json',
      alert: endent`
        <Alert type="warning">

        <strong class="alert-header"><Icon name="exclamation-triangle"></Icon>
        Deprecated</strong>

        The \`cypress.json\` file is no longer supported as of Cypress version 10.0.0. We recommend
        that you update your configuration.

        Please see the [new configuration guide](/guides/references/configuration) and the
        [migration guide](/guides/references/migration-guide) for more information.

        </Alert>
      `,
      body: jsonBody && `__FIX_INDENT__${jsonBody}`,
    }
  )
}

module.exports = {
  type: 'containerDirective',
  name: 'cypress-config-example',
  processNode,
}
