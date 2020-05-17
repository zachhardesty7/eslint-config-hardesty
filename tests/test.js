/* eslint strict: 0, global-require: 0 */

const fs = require('fs')
const eslint = require('eslint')
const test = require('tape')

const wrap = (body) => (
  `/* eslint-disable import/no-unresolved */
import React from 'React'
${body}
`)

test('all entry point(s) parse', (t) => {
  t.doesNotThrow(() => require('..'), 'index does not throw')
  t.end()
})

test('load config in eslint to validate all syntax rules are correct', (t) => {
  const { CLIEngine } = eslint

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.js',
  })

  fs.readdirSync('./tests/').forEach((fileName) => {
    if (!fileName.includes('test')) {
      const file = fs.readFileSync(`./tests/${fileName}`)
      const result = cli.executeOnText(file.toString())
      t.equal(result.errorCount, 0)
      if (result.errorCount) {
        console.log(`found errors in ${fileName}`)
        console.log(result.results[0].messages)
      }
    }
  })

  t.end()
})
