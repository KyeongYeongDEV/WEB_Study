class Sector{
    factoryOperation(quantity){
        return (quantity * 180) + (quantity * 10) // 3분을 초로 계산 + 딜레이
    }
}

module.exports = Sector