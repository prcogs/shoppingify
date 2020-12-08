import { useCallback } from "react"
import { useDispatch } from "react-redux"

import { filterItems } from '../../actions/filterItemsAction'



export const SearchBarItems = ({ filterItem }) => {
    return (
        <div>
            <input type="text" onChange={(e) => {filterItem(e.target.value)}}></input>
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