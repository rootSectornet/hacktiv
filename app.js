const express = require('express')

const app = express()
const middlewaresatu = (req, res, next) => {
	console.log("middleware pertama")
	next()
}
const middlewaredua = (req, res, next) => {
	console.log(middlewaresatu)
	next()
}
app.use(middlewaresatu)

app.use(middlewaredua)

app.get('/',(req, res) => {
	res.send("hello Tedi susanto")
})

app.get('/echo/:name', (req, res) => {
	res.send(`hello ${req.params.name}`)
})
app.listen(5432, () => {
	console.log("server running at http://localhost:5432")
})