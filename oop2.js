import House from "./oop.js";
import { Logger } from "./oop3.js";

class HouseService{
    constructor()
    {
        this.houses=[];
        this.logger = new Logger();
    }
    list(filterCb){
        console.log(filterCb?this.houses.filter(filterCb):this.houses);
    }
    add(house)
    {
        this.houses.push(house)
        this.logger.log("Yeni bir ev eklendi." ,house);
    }
}

const houseService = new HouseService();
const newHouse = new House(3,2,"Kuzey",100,5000)
houseService.add(newHouse)
const newHouse2 = new House(3,2,"Güney",100,5000)
houseService.add(newHouse2)
houseService.list()
houseService.list((house)=> house.cephe==="Kuzey")