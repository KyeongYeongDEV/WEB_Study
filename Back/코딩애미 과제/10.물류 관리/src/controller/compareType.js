class CompareType{
    #previousType

    setPreviousType(previousType){
        this.#previousType = previousType
    }

    typeToChanged(curentType){
        if(this.#previousType === curentType) return 0
        return 1
    }

}

module.exports = CompareType