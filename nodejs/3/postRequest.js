const http = require('http')


const PORT = 3000
const server = http.createServer((req,res)=>{
    if (req.method === 'POST' && req.url === '/submit'){
        let body = ''
        req.on('data',(chunk)=>{
            body += chunk.toString()
        })
        req.on('end',()=>{
            res.writeHead(200,{'content-type':'application/json'})
            res.end(JSON.stringify({message:'Data received',data:body}))
        })
    }else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('Route not found')
    }
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})