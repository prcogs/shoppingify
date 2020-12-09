import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addItemInList } from '../../actions/activeListAction'

import './item.scss'

export const Item = ({ item, addItem }) => {
    return (
        <div className="item">
            {item.name} <button className="item__btn" onClick={() => addItem(item.name, item.category)}><i className="fa fa-plus item__btn--color" aria-hidden="true"></i></button>
        </div>
    )
}

const ItemStore = ({ item }) => {
    const dispatch = useDispatch()
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])

    return <Item item={item} addItem={addItem}/>
}

export default ItemStore