import { useCallback } from "react"
import { useDispatch } from "react-redux"

import { addItemInList } from '../../actions/activeListAction'
import { changeStateInfoItem } from '../../actions/infoItemAction'

import './item.scss'

export const Item = ({ item, addItem, activeInfoItem, view }) => {
    return (
        <div className="item">
            <div className="item__container" onClick={() => {activeInfoItem(true, item)}}>
                <strong style={ {"textDecoration": (view === "update" && item.check)&& "line-through" }}>{item.name}</strong>
                {view === "update"  ? <p className="item__rigthSide item__rigthSide--pcs"><strong style={ {"textDecoration": (view === "update" && item.check)&& "line-through" }}>{item.number}</strong> pc{item.number > 1 && "s"}</p>
                                    : <button className="item__rigthSide item__rigthSide--btn" onClick={(e) => {addItem(item.name, item.category); e.stopPropagation()}}><i className="fa fa-plus item__rigthSide--btn--color" aria-hidden="true"></i></button> 
                                    } 
            </div>
            
        </div>
    )
}

const ItemStore = ({ item, view }) => {
    const dispatch = useDispatch()
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])
    const activeInfoItem = useCallback((active, item) => {
        dispatch(changeStateInfoItem(active, item))
    },[])

    return <Item item={item} addItem={addItem} activeInfoItem={activeInfoItem} view={view}/>
}

export default ItemStore