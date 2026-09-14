function middlewareName(req,res,next){
    
    
    
    next();
}

app.post('/login', middlewareName,(req,res)=>{
    
});