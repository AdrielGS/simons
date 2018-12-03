const dolar = require('./dolar')

async function run({ text }) {
  const parsers = [dolar]
  const promisedResults = parsers.map(async parser => parser(text))
  const results = await Promise.all(promisedResults) 
  return results.flat()
}

module.exports = run
