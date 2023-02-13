class Sort{
    startSort(list){
        return list.sort((a,b)=>{ 
            if(a.deadline > b.deadline) return 1
            else if(a.deadline < b.deadline) return -1
            else{
                if(a.quantity > b.quantity) return -1
                else if(a.quantity < b.quantity) return 1
                else return 0
            }
        })
    }
}

module.exports = Sort