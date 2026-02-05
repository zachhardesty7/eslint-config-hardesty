/* eslint-disable unicorn/prefer-module, strict, global-require */
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

test('load config in eslint to validate all syntax rules are correct', async (t) => {
  // FIXME: https://eslint.org/docs/latest/use/migrate-to-8.0.0#-the-cliengine-class-has-been-removed
  // https://eslint.org/docs/latest/integrate/nodejs-api#eslint-class
  const { ESLint } = eslint

  const cli = new ESLint({
    // FIXME: how to specify file?
    useEslintrc: false,
  })

  const promises = [];

  for (const fileName of fs.readdirSync('./tests/')) {
    if (!fileName.includes('test')) {
      const file = fs.readFileSync(`./tests/${fileName}`)
      promises.push(cli.lintText(file.toString()))
    }
  }

  const results = await Promise.all(promises)

  for (const result of results) {
    t.equal(result[0].errorCount, 0)
    if (result[0].errorCount) {
      console.log(`found errors in ${result[0].filePath}`)
      console.log(result[0].messages)
    }
  }

  t.end()
})
