const fs = require("fs");
fs.writeFile("data.txt", "\n six seven", (err) => {
    if (err) {
        console.log("khud hi likh le nalle");
    }

    console.log("likh diya nalle");
});


console.log(Date.now());