import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createList, cancelActiveList, updateActiveList, changeCheckItem, changeAllCheck } from "../../actions/activeListAction"
import ActiveListStore from "../activeList/activeList"
import { activeListSelector, filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"

import svg from '../../images/undraw_shopping_app_flsj 1.svg'


import './shoppingList.scss'


export const ShoppingList = ({ save, nameList, handleName, items, cancelList, updateList, loading, activeList, check, changeCheck }) => {
    return (
        <div className="shoppingList">
            <label htmlFor="nameList"></label>
            <input type="text" 
                   placeholder="Shopping list" 
                   value={nameList} 
                   onChange={(e) => handleName(e.target.value) }
                   className="shoppingList__input"
                   disabled={activeList.update}/>

            {activeList.update && <label className="control control-checkbox shoppingList__checkbox--completed">
                                    <input type="checkbox" checked={check} onChange={() => { changeCheck(!check)}}/>
                                    <div className="control_indicator"></div>
                                  </label>}
            {items.length > 0 ? <ActiveListStore/> : <div className="shoppingList__msg">No items</div> }
            {items.length > 0 ? <AllBtn save={save} nameList={nameList} cancelList={cancelList} updateList={updateList} loading={loading}/> : "" }
            {items.length > 0 ? "" : <div className="shoppingList__containerSvg"><img src={svg} className="shoppingList__svg" alt="Panier de course"/></div> }
        </div>
    )
}

const AllBtn = ({ save, nameList, cancelList, updateList, loading }) => {
    const activeList = useSelector(activeListSelector)
    const [msg, setMsg] = useState(false)

    return (
        <div className="shoppingList__allBtn">
                <button className="shoppingList__allBtn__btn shoppingList__allBtn--cancel" onClick={() => {setMsg(true)}} >Cancel</button>
                {activeList.update  ? <button disabled={nameList === "" ? true : false} 
                                              className="shoppingList__allBtn__btn shoppingList__allBtn--update" 
                                              onClick={() => {updateList(activeList)}}>Update</button>
                                    : <button disabled={nameList === "" ? true : false} 
                                              className="shoppingList__allBtn__btn shoppingList__allBtn--save" 
                                              onClick={() => {save(nameList, activeList.items)}}>Save</button>}

                {msg && <div className="shoppingList__allBtn--containerModalCancel" onClick={() => {setMsg(false)}}>
                            <div className="shoppingList__allBtn--modalCancel" onClick={(e) => {e.stopPropagation()}}>
                                <p>Are you sure you want to cancel this list? Any changes not saved will be lost</p>
                                <button className="shoppingList__allBtn--modalCancel--btnYes" 
                                        onClick={() => {cancelList(); setMsg(false)}}>Yes</button> <button className="shoppingList__allBtn--modalCancel--btnNo" 
                                                                                                           onClick={() => {setMsg(false)}}>No</button>
                            </div>
                        </div>}                     
                {loading && "wait a minute, we save your list in the matrix"}
        </div>
    )
}

const ShoppingListStore = () => {
    const [loading, setLoading] = useState(false)
    

    const activeList = useSelector(activeListSelector)
    const [check, setCheck] = useState(activeList.completed)
    const [nameList, setNameList] = useState(activeList.name)

    useEffect(() => {
        setCheck(activeList.completed)
    },[activeList.completed])

    const changeCheck = useCallback((check) => {
        setCheck(check)
        dispatch(changeAllCheck(check))
    })

    useEffect(() => {
        setNameList(activeList.name)
    },[activeList.name])

    const handleName = useCallback((nameList) => {
        setNameList(nameList)
    })
    
    const items = useSelector(filteredItemsInActiveListSelector)

    const dispatch = useDispatch()
    const save = useCallback(async (nameList, items) => {
        setLoading(true)
        await dispatch(createList(nameList, items))
        setNameList("") // a changer si resp API n'est pas bonne
        setLoading(false)
    },[])

    const cancelList = useCallback(() => {
        dispatch(cancelActiveList())
    },[])

    const updateList =useCallback(async (activeList) => {
        setLoading(true)
        await dispatch(updateActiveList(activeList))
        setLoading(false)
    },[])


    return <ShoppingList save={save} 
                         nameList={nameList} 
                         handleName={handleName} 
                         items={items} 
                         cancelList={cancelList}
                         updateList={updateList}
                         loading={loading}
                         activeList={activeList}
                         check={check}
                         changeCheck={changeCheck}/>
}

export default ShoppingListStore