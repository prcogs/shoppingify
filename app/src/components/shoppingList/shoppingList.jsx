import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createList, cancelActiveList } from "../../actions/activeListAction"
import ActiveListStore from "../activeList/activeList"
import { activeListSelector, filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"

import svg from '../../images/undraw_shopping_app_flsj 1.svg'


import './shoppingList.scss'


export const ShoppingList = ({ save, nameList, handleName, items, cancelList, loading }) => {
    return (
        <div className="shoppingList">
            <label htmlFor="nameList"></label>
            <input type="text" 
                   placeholder="Shopping list" 
                   value={nameList} 
                   onChange={(e) => handleName(e.target.value) }
                   className="shoppingList__input"/>
            
            {items.length > 0 ? <ActiveListStore/> : <div className="shoppingList__msg">No items</div> }
            {items.length > 0 ? <AllBtn save={save} nameList={nameList} cancelList={cancelList} loading={loading}/> : "" }
            {items.length > 0 ? "" : <div className="shoppingList__containerSvg"><img src={svg} className="shoppingList__svg" alt="Panier de course"/></div> }
        </div>
    )
}

const AllBtn = ({ save, nameList, cancelList, loading }) => {
    return (
        <div className="shoppingList__allBtn">
                <button className="shoppingList__allBtn__btn shoppingList__allBtn--cancel" onClick={() => {cancelList()}}>Cancel</button>
                <button className="shoppingList__allBtn__btn shoppingList__allBtn--save" onClick={() => {save(nameList)}}>Save</button>
                {loading && "wait a minute, we save your list in the matrix"}
        </div>
    )
}

const ShoppingListStore = () => {
    const [nameList, setNameList] = useState("")
    const [loading, setLoading] = useState(false)

    const handleName = useCallback((nameList) => {
        setNameList(nameList)
    })

    const items = useSelector(filteredItemsInActiveListSelector)
    const activeList = useSelector(activeListSelector)
    const itemsList = activeList.items

    const dispatch = useDispatch()
    const save = useCallback(async (nameList) => {
        setLoading(true)
        await dispatch(createList(nameList, itemsList))
        setLoading(false)
    },[])
    const cancelList = useCallback(() => {
        dispatch(cancelActiveList())
    },[])

    return <ShoppingList save={save} 
                         nameList={nameList} 
                         handleName={handleName} 
                         items={items} 
                         cancelList={cancelList}
                         loading={loading}/>
}

export default ShoppingListStore