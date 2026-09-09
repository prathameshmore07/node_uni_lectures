const fs= require('fs')
const FILE="./plants.json";
function getPlants(){
const  data=fs.readFileSync(FILE);
return JSON.parse(data);

}
function savePlants(plants){
    fs.writeFileSync(FILE,JSON.stringify(plants,null,2));

}

module.exports={getPlants,savePlants};