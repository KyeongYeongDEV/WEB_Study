class Arithmetic{
    #PLUS = "+"
    #MINUS = "-"
    #MULTYPLY = "*"
    #DIVIED = "/"
    
    constructor(){
        this.#PLUS = "+"
        this.#MINUS = "-"
        this.#MULTYPLY = "*"
        this.#DIVIED = "/"
    }

    getPlus(){
        return this.#PLUS
    }
    getMinus(){
        return this.#MINUS
    }
    getMultyply(){
        return this.#MULTYPLY
    }
    getDivied(){
        return this.#DIVIED
    }
}


module.exports = Arithmetic