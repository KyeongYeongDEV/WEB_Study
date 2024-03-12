class Sort{
    listSort(list){
        return list.sort((a,b)=>{ 
            if(a.deadline > b.deadline) return 1
            else if(a.deadline < b.deadline || a.quantity >= b.quantity) return -1
        })
    }
    productTimeSort(tmpProductTimeList){
        return tmpProductTimeList.sort((a,b)=>{
            if(a.productTime >= b.productTime) return 1
            else return -1
        })
    }
}

module.exports = Sort