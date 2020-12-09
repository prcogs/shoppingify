import { useCallback } from "react"
import { useDispatch } from "react-redux"

import { filterItems } from '../../actions/filterItemsAction'

import "./searchBarItems.scss"

export const SearchBarItems = ({ filterItem }) => {
    return (
        <div className="searchBarItems">
            <label htmlFor="search items" className="searchBarItems__label"><i className="fa fa-search" aria-hidden="true"></i></label>
            <input type="text"
                   name="search items"
                   placeholder="search items" 
                   onChange={(e) => {filterItem(e.target.value)}} 
                   className="searchBarItems__input">
            </input>
        </div>
    )
}

const SearchBarItemsStore = () => {
    const dispatch = useDispatch()
    const filterItem = useCallback((value) => {
        dispatch(filterItems(value))
    },[])

    return <SearchBarItems filterItem={filterItem}/>
}

export default SearchBarItemsStore