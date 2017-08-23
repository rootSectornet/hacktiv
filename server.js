const http = require('http')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
res.setHeader('Content-Type','application/json')
res.end('heello tedi root')

})

server.listen(port, host, () => {
	console.log('server running at http://${host}:${port}/')
})
