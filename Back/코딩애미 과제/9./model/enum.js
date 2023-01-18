class arithmetic{
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



    // PLUS : "+",
    // MINUS : "-",
    // MULTYPLY : "*",
    // DIVIED : "/"
}


module.exports = arithmetic