const Secter = require("./sector")

class createSector{
    createOtherSector(orderVolume){
        if(orderVolume > 4){
            orderVolume = 4
        }
        let secterList = []
        for(let i = 1; i <= orderVolume; i++ ){
            secterList.push(new Secter())
        }
        
        return secterList
    }
}

module.exports = createSector