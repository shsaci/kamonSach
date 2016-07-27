// Include modules provided by Node.js
var fs = require('fs')
var path = require('path')

function readAsync () {
  var studentsFile = path.join(__dirname, 'students.json')
  fs.readFile(studentsFile, showContents)
}

function showContents (err, contents) {
  if (err) {
    return console.log(err.message)
  }
var studentObj = JSON.parse(contents)
studentObj.colorOfShoes = 'red'
studentObj.flavourAardvark = 'Bob'
console.log(studentObj, typeof contents);

// The following line is an experiment
// console.log(JSON.stringify(contents));

  // var studentJson = buffer.toString()
  // var type = typeof(studentJson)
  // console.log(studentJson, type)
}

readAsync()
