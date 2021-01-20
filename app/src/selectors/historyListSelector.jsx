import { HistoryList } from '../components/historyList/historyList'
import sortAlphabeticalOrder from '../lib/sortAlphabeticalOrder'

export const historyListSelector = ({historyList}) => {
    if(historyList.lists === undefined) return []
    else { return historyList.lists}
}

// export const listByName = ( name ,{ historyList }) => {
//     if(historyList === undefined) {
//         return []
//     } else {
//         return historyList.filter(list => list.name === name)
//     }    
// }

export const filteredHistoryList = ({historyList}) => {
    if(historyList.lists === undefined) {
        return []
    } else {
        const lists = historyList.lists.map(list => sortList(list, list.items))
        return lists
    }    
}


const sortList = (list, items) => {
    var category = []
    for(let i in items) {
        category = [...category, items[i].category]
    }

    // ne garde que les catégories unique
    const uniqueCategory = [...new Set (category)]

    // regroupe les items par catégories
    var filterByCategories = []
    for (let i in uniqueCategory) {
        const filter = items.filter(item => item.category === uniqueCategory[i] )
        filterByCategories = [...filterByCategories, filter]
    }

    // tri par ordre alphabéthique les items dans les catégories
    var filterByCategoriesAndOrder = []
    for(let i in filterByCategories) {
        const order = filterByCategories[i].sort(sortAlphabeticalOrder)
        filterByCategoriesAndOrder = [...filterByCategoriesAndOrder, order]
    }

    return {...list, items : filterByCategoriesAndOrder}
}