import { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"
import { addItemInList, deleteItemList, removeOnePieceItem } from '../../actions/activeListAction'
import ItemActiveListStore from "../itemActiveList/itemActiveList"

import './activeList.scss'

export const ActiveList = ({ items, addItem, deleteItem, removeOnePiece }) => {
    return(
        <div className="activeList">
            {items.map((item, i) => {
                return (
                    <div className="activeList__container" key={i}>
                        <strong className="activeList__category">{item[0].category}</strong>
                        <div className="activeList__items">
                            {item.map((item, i) => {
                                return <ItemActiveListStore item={item} 
                                                            addItem={addItem} 
                                                            deleteItem={deleteItem} 
                                                            removeOnePiece={removeOnePiece}
                                                            key={i}/>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


const ActiveListStore = () => {

    const items = useSelector(filteredItemsInActiveListSelector)
    const dispatch = useDispatch()
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])

    const deleteItem = useCallback((name) => {
        dispatch(deleteItemList(name))
    },[])

    const removeOnePiece = useCallback((name, number, check, category) => {
        dispatch(removeOnePieceItem(name, number, check, category))
    })

    return <ActiveList items={items} 
                       addItem={addItem} 
                       deleteItem={deleteItem}
                       removeOnePiece={removeOnePiece}/>
}

export default ActiveListStore