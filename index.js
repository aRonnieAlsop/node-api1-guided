// import the server and start it!
const server = require('./api/server')
const PORT = 9000

server.listen(PORT, () => {
    console.log('server started on http://localhost:9000')
})