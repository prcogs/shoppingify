import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createList, cancelActiveList } from "../../actions/activeListAction"
import ActiveListStore from "../activeList/activeList"
import { filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"

import svg from '../../images/undraw_shopping_app_flsj 1.svg'


import './shoppingList.scss'


export const ShoppingList = ({ save, nameList, handleName, items, cancelList }) => {
    return (
        <div className="shoppingList">
            <label htmlFor="nameList"></label>
            <input type="text" 
                   placeholder="Shopping list" 
                   value={nameList} 
                   onChange={(e) => handleName(e.target.value) }
                   className="shoppingList__input"/>
            
            {items.length > 0 ? <ActiveListStore/> : <div className="shoppingList__msg">No items</div> }
            {items.length > 0 ? <AllBtn save={save} nameList={nameList} cancelList={cancelList}/> : "" }
            {items.length > 0 ? "" : <div className="shoppingList__containerSvg"><img src={svg} className="shoppingList__svg"/></div> }
        </div>
    )
}

const AllBtn = ({ save, nameList, cancelList }) => {
    return (
        <div className="shoppingList__allBtn">
                <button className="shoppingList__allBtn__btn shoppingList__allBtn--cancel" onClick={() => {cancelList()}}>Cancel</button>
                <button className="shoppingList__allBtn__btn shoppingList__allBtn--save" onClick={() => {save(nameList)}}>Save</button>
        </div>
    )
}

const ShoppingListStore = () => {
    const [nameList, setNameList] = useState("")
    const handleName = useCallback((nameList) => {
        setNameList(nameList)
    })

    const items = useSelector(filteredItemsInActiveListSelector)

    const dispatch = useDispatch()
    const save = useCallback((nameList) => {
        dispatch(createList(nameList))
    })
    const cancelList = useCallback(() => {
        dispatch(cancelActiveList())
    })

    return <ShoppingList save={save} nameList={nameList} handleName={handleName} items={items} cancelList={cancelList}/>
}

export default ShoppingListStore