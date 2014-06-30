#!/usr/bin/env node
var request = require('request')

var argv = require('yargs')
  .alias('t','to')
  .alias('f','from')
  .alias('r','rel')
  .alias('v','verbose')
  .alias('h','help')
  .usage('$0 -t <uri> -f <uri> -r <uri>')
  .demand(['t','f','r'])
  .argv


var sender = 'http://alpha.rel.is/messages'

sender = 'http://localhost:8099/messages'

request({
  uri: sender,
  method: 'POST',
  json: {
    "@context":"http://rel.is/0.1",
    to: argv.to,
    from: argv.from,
    rel: argv.rel
  }
}, function (e, res) {
  console.log(e, res.statusCode, res.body)
})