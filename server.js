const path = require('path')
const express = require('express')
const data = require('./data/item.json')
const app = express()
// setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/',(req, res) => {
	// res.send("hello Tedi susanto")
	res.render('index',{
		item : data
	})
})

app.listen(5432, () => {
	console.log("server running at http://localhost:5432")
})