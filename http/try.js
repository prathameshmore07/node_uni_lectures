const http=require('http');

const server =http.createServer((req,res)=>{
    http.get('http://jsonplaceholder.typicode.com/posts/1',(res)=>{
        let data = " ";
        res.on('data', (chunk)=>{
            data+=chunk;
        })
        res.on('end',()=>{
            console.log('Response:- ',JSON.parse(data));
        });
    });

});

server.listen(6969);