const http = require('http')
const url = require('url')
PORT = 3000
const server = http.createServer((req,res)=>{

    if(req.method === 'GET' && req.url.startsWith('/search')){
        const queryObj = url.parse(req.url,true).query
        
        res.writeHead(200,{'Content-Type':'application/json','Custom-header':'Node JS Server'})
        res.end(JSON.stringify({message:'Query received',queryObj}))

    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route Not Found')
    }

})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})