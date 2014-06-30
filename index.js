#!/usr/bin/env node
var request = require('request')

var argv = require('yargs')
  .alias('t','to')
  .alias('f','from')
  .alias('r','rel')
  .alias('v','verbose')
  .alias('h','help')
  .usage('rel-cli -t <uri> -f <uri> -r <uri>')
  .demand(['t','f','r'])
  .argv

var sender = 'http://alpha.rel.is/messages'

var message = {
    "@context":"http://rel.is/0.1",
    to: argv.to,
    from: argv.from,
    rel: argv.rel
  }

if (argv.verbose) {
  console.log(message)
}

request({
  uri: sender,
  method: 'POST',
  json: message
}, function (e, res) {
  if (e || res.statusCode >= 400) {
    console.error(r, res.statusCode, rest.body)
    return process.exit(1)
  }
  if (argv.verbose) {
    console.log(res.statusCode, res.body || '')
  }
})