function processNode(node, { error }) {
  const { attributes } = node

  if (!attributes) {
    return error(
      `Found a "::testing-type-specific-option" directive without an attribute. You might have intended to import a partial into a markdown file, but no partial can be found without a test type attribute. The "::testing-type-specific-option" directive should look like "::testing-type-specific-option{attribute}".`
    )
  }

  try {
    const test = `Depending on which Cypress [test type](/guides/overview/choosing-testing-type)
    you are using, you may configure your OPTION_HERE accordingly.`

    if (Object.values(attributes).includes('supportFile')) {
      const testOption = test.only.replace('OPTION_HERE', 'supportFile')

      return testOption;
    }
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
