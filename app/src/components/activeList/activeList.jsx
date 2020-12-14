import { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"
import { addItemInList, deleteItemList } from '../../actions/activeListAction'


import './activeList.scss'

export const ActiveList = ({ items, changeView, view, addItem, deleteItem }) => {
    return(
        <div className="activeList">
            {items.map((item, i) => {
                return (
                    <div className="activeList__container" key={i}>
                        <strong className="activeList__category">{item[0].category}</strong>
                        <div className="activeList__items">
                            {item.map((item, i) => {
                                return(
                                    <div className="activeList__item" key={i}>
                                        <p>{item.name}</p>
                                        <HandleNumberItem item={item} 
                                                          changeView={changeView} 
                                                          view={view} 
                                                          addItem={addItem} 
                                                          deleteItem={deleteItem}
                                                          key={item.name}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const HandleNumberItem = ({ item, changeView, view, addItem, deleteItem }) => {
    if(view) {
        return (
            <div className="activeList__number" onClick={()=> {changeView(false)}}>
                {item.number} pc{item.number > 1 ? "s" : "" }
            </div>
        )
    }

    else {
        return (
            <div className="activeList__btns" onMouseLeave={() => {changeView(true)}}>
                <button onClick={() => deleteItem(item.name)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <button><i className="fa fa-minus" aria-hidden="true"></i></button>
                <p className="activeList__number activeList__number--active">{item.number} pc{item.number > 1 ? "s" : "" }</p>
                <button onClick={() => addItem(item.name, item.category)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        )
    }
    
}

const ActiveListStore = () => {
    const [view, setView] = useState(true)
    const changeView = useCallback((boolean) => {
        setView(boolean)
    })

    const items = useSelector(filteredItemsInActiveListSelector)
    const dispatch = useDispatch()
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])

    const deleteItem = useCallback((name) => {
        dispatch(deleteItemList(name))
    })

    return <ActiveList items={items} 
                       changeView={changeView} 
                       view={view} 
                       addItem={addItem} 
                       deleteItem={deleteItem}/>
}

export default ActiveListStore