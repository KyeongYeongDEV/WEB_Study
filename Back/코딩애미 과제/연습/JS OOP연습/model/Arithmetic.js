class Arithmetic{
    #PLUS
    #MINUS
    #MULTYPLY
    #DIVIDE

    constructor(){
        this.#PLUS = "+"
        this.#MINUS = "-"
        this.#MULTYPLY = "*"
        this.#DIVIDE = "/"
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
    getDivide(){
        return this.#DIVIDE
    }
}

module.exports = Arithmetic