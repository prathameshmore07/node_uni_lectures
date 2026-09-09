const http=require('http');

const server=http.createServer((req,res)=>{
    // const email=req.getParameter();
    // const password=req.getParameter();
//response return

console.log(req.method);
res.write('hello nigga svr started');
res.end('\nsixxxx sevennnnn');
});

server.listen(6767);