//제품 타입을 검사
// 타입이 바꼈다면 20초 추가

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