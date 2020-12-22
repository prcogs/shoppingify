
const reverseFilterItems = (list) => {
    var listNoOrder =[]

    for(let i in list.items) {
        listNoOrder = [ ...listNoOrder, ...list.items[i]]
    }
    return {...list, items : listNoOrder }
}

export default reverseFilterItems