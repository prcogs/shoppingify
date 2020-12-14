import { createSelector } from 'reselect'
import sortAlphabeticalOrder from '../lib/sortAlphabeticalOrder'

import { filterItemsSelector } from './filterItemsSelector'


export const itemsSelector = ({items}) => items

export const filteredItemsSelector = createSelector(
    itemsSelector,
    filterItemsSelector,
    ( items, filterItems ) => {
    //filtre les items via l'input filterItems
    var filteredItems
    if(filterItems === null || filterItems === "" || filterItems === undefined) {
        filteredItems =  items
    } else {
        filteredItems = items.filter( item => item.name.toLowerCase().substr(0, filterItems.length) === filterItems.toLowerCase() )             
    }
    
    // récupère toutes les catégories
    var category = []
    for(let i in filteredItems) {
        category = [...category, filteredItems[i].category]
    }

    // ne garde que les catégories unique
    const uniqueCategory = [...new Set (category)]

    // regroupe les items par catégories
    var filterByCategories = []
    for (let i in uniqueCategory) {
        const filter = filteredItems.filter(item => item.category === uniqueCategory[i] )
        filterByCategories = [...filterByCategories, filter]
    }

    // tri par ordre alphabéthique les items dans les catégories
    var filterByCategoriesAndOrder = []
    for(let i in filterByCategories) {
        const order = filterByCategories[i].sort(sortAlphabeticalOrder)
        filterByCategoriesAndOrder = [...filterByCategoriesAndOrder, order]
    }

    return filterByCategoriesAndOrder
})

