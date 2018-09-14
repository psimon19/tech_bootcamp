const express = require('express')
const app = express()

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
var data = request.responseXML

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/wotd', function (req, res) {
  request.open("GET", "https://quotes.rest/qod")
  request.send('')
  request.onload = function() {
	  // data = XML.parse(this.response)
  }
  res.send(data)
  data = request.responseXML
  console.log(data)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))