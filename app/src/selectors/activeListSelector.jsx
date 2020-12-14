import sortAlphabeticalOrder from '../lib/sortAlphabeticalOrder'

export const activeListSelector = ({activeList}) => activeList

export const filteredItemsInActiveListSelector = ({activeList}) => {
    // récupère toutes les catégories
    const items = activeList.items
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

    return filterByCategoriesAndOrder
} 