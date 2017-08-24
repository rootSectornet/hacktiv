const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const data = require('./data/item.json')
const app = express()
// setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(express.static('public'))
app.get('/',(req, res) => {
	// res.send("hello Tedi susanto")
	res.render('index',{
		item : data
	})
})
app.get('/detail/:id', (req, res) => {
	const items = data.find(d => {
		return d.id === parseInt(req.params.id)
	})
	res.render('post',{
			item : items
	})
})
app.listen(3000, () => {
	console.log("server running at http://localhost:5432")
})