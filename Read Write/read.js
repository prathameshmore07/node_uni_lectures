const fs =require('fs');
    fs.readFile(("data.txt"),"utf8",(err)=>{
        if (err){
            console.log("khud hi likh le nalle")
        }
        console.log("likh diya nalle")
    }
)