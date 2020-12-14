import { useCallback } from "react"
import { useDispatch } from "react-redux"

import { addItemInList } from '../../actions/activeListAction'
import { changeStateInfoItem } from '../../actions/infoItemAction'

import './item.scss'

export const Item = ({ item, addItem, activeInfoItem }) => {
    return (
        <div className="item">
            <div className="item__container" onClick={() => {activeInfoItem(true, item)}}>
                {item.name} 
            </div>
            <button className="item__btn" onClick={() => addItem(item.name, item.category)}><i className="fa fa-plus item__btn--color" aria-hidden="true"></i></button>
        </div>
    )
}

const ItemStore = ({ item }) => {
    const dispatch = useDispatch()
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])
    const activeInfoItem = useCallback((active, item) => {
        dispatch(changeStateInfoItem(active, item))
    },[])

    return <Item item={item} addItem={addItem} activeInfoItem={activeInfoItem}/>
}

export default ItemStore