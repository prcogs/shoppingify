

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

    return filterByCategories
} 