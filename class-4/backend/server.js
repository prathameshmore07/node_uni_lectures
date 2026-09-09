// const http = require('http');
// const PORT = 6767;
// const { getPlants, savePlants } = require('./plantServices');
// const url=require("url");

// const server = http.createServer((req, res) => {

//     const parseUrl=url.parse(req.url,true); //

//     const viewplants = "here are all plants";
//     const addnewplant = "here u can add new plants";
//     const updateplant = "here u can update plant";
//     const deleteplant = "plant deleted";

//     //View all plants
//     if (req.method === 'GET' && req.url === '/plants') {
//         const plants = getPlants();

//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         });
//         res.end(JSON.stringify(plants));
//     }

//     // Add new plant
//     else if (req.method === 'POST' && req.url === '/plants') {
//         let body = '';
//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });

//         req.on('end', () => {
//             const newPlant = JSON.parse(body);
//             const plants = getPlants();
//             newPlant.id = Date.now();
//             plants.push(newPlant);
//             savePlants(plants);
//             res.writeHead(201, {
//                 "Content-Type": "application/json"
//             });

//             res.end(JSON.stringify(newPlant));
//         });
//     }

//     //update plant

//     else if (req.method === 'PUT' && parseUrl.pathname.startsWith('/plants/')) {
//         const id = Number(parseUrl.pathname.split("/")[2]);
//         console.log("id is :", id);

//         let body = ' ';
//         req.on('data', (chunk) => {
//             body += chunk;
//         })
//         req.on('end', () => {
//             const updatedData = JSON.parse(body);
//             const plants = getPlants();
//             const plant = plants.find((p) => p.id === id);

//             if (!plant) {
//                 res.writeHead(404)
//                 return res.end("Plant Not Found");
//             }

//             plant.name = updatedData.name;
//             plant.price = updatedData.price;

//             savePlants(plants);
//             res.end(JSON.stringify(plant));
//         })

//     }

//     // delete plant
//     else if (req.method === 'DELETE' && parseUrl.pathname.startsWith === ('/plants/')) {
//         const id = Number(parseUrl.pathname.split("/")[2]);
//         console.log("id is: ", id);
//         const plants = getPlants();
//        const updatedData=plants.filter((p)=>p.id!==id);
//        savePlants(updatedData);
//         res.end(deleteplant);


//     }

//     else {
//         res.statusCode = 404;
//         res.end('Page Not Found');
//     }

// });

// server.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
// });

const http = require('http');
const url = require('url');
const PORT = 3000 || 9000;
const { getPlants, savePlants } = require('./plantServices');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    const parseUrl = url.parse(req.url, true);
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    //GET ALL PLANTS
    if (req.method === 'GET' && req.url === '/plants') {
        const plants = getPlants();

        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify(plants));
    }

    //Add plants 
    else if (req.method === 'POST' && req.url === '/plants') {
        let data = " ";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", () => {
            const newPlant = JSON.parse(data);
            const plants = getPlants();
            newPlant.id = Date.now();
            plants.push(newPlant);
            savePlants(plants);
            res.writeHead(201, {
                "Content-Type": "application/json"
            });
            res.end(JSON.stringify(newPlant));
        });
    }

    //Update a Plant 
    else if (req.method === 'PUT' && parseUrl.pathname.startsWith('/plants/')) {
        const id = Number(parseUrl.pathname.split("/")[2]);
        console.log("Id is :", id);

        let body = "";

        req.on('data', (chunk) => {
            body += chunk;
        })

        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const plants = getPlants();
            const plant = plants.find((p) => p.id === id);

            if (!plant) {
                res.writeHead(404)
                return res.end("Plant Not Found");
            }

            plant.name = updatedData.name;
            plant.price = updatedData.price;

            savePlants(plants);
            res.end(JSON.stringify(plant));
        });
    }

    //Delete a plant
    else if (req.method === "DELETE" && parseUrl.pathname.startsWith('/plants/')) {
        const id = Number(parseUrl.pathname.split("/")[2]);
        const plants = getPlants();
        const updatedData = plants.filter((p) => p.id !== id);

        savePlants(updatedData);
        res.end("Deleted");
    }
    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
})