const fs = require('fs')
const path = require('path')

function processNode(node, { error }) {
  const { attributes } = node
  const { file } = attributes

  if (!attributes) {
    return error(
      `Found a "::testing-type-specific-option" directive without an attribute. You might have intended to import a partial into a markdown file, but no partial can be found without a test type attribute. The "::testing-type-specific-option" directive should look like "::testing-type-specific-option{attribute}".`
    )
  }

  try {
    const absPath = path.join(__dirname, '../../content/', file)

    return fs.readFileSync(absPath, { encoding: 'utf8' })
  } catch (err) {
    return error(
      `Failed to read file: ${attributes}. This error is due to a problem with partials. Check your markdown files for the "::testing-type-specific-option{attribute}" directive and make sure that attributes exists. If this issue persists, please open a new issue with steps to reproduce.`,
      err
    )
  }
}

module.exports = {
  type: 'leafDirective',
  name: 'testing-type-specific-option',
  processNode,
}
