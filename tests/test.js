var test = require('tape')

var route = require('../route')

test('we are testing for the display of json data from a read file, not from an exported module', function (t) {
  var expected = "webplay"

  route.readAsync(function (err, actual) {
    t.error(err)
    t.equal(actual.name, expected)
    t.end()
  })
})
