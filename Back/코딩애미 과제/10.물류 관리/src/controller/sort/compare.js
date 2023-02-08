class Compare{
    compareOfDeadline(a,b){
        return a.deadline - b.deadline
    }

    compareOfQuantity(a,b){
        return a.quantity - b.quantity
    }
}

module.exports = Compare