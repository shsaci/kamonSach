module.exports = {
  readAsync: readAsync
}

// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function readAsync (callback) {
  var ordinaryFile = path.join(__dirname, 'ordinary.json')
  fs.readFile(ordinaryFile, function (err, contents) {
    if (err) {
      callback(err)
      return
    }

    var ordinaryFileObj = JSON.parse(contents)

    ordinaryFileObj.colorOfShoes = 'red'
    ordinaryFileObj.flavourAardvark = 'Bob'
    callback(null, contents)

  })
}
