import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeCheckItem } from "../../actions/activeListAction"
import { activeListSelector } from "../../selectors/activeListSelector"
import HandleNumberItem from "../handleNumberItem/handleNumberItem"

import '../../styles/checkbox.scss'


export const ItemActiveList = ({ item, addItem, deleteItem, removeOnePiece, check, changeCheck, activeList }) => {
    return (
        <div className="activeList__item">
                
            {activeList.update && <label className="control control-checkbox">
                                    <input type="checkbox" checked={check} onChange={() => {changeCheck(item, !check)}} className="activeList__checkbox"/>
                                    <div className="control_indicator"></div>
                                  </label>}
            <p>{item.name}</p>
            <HandleNumberItem item={item} 
                                addItem={addItem} 
                                deleteItem={deleteItem}
                                removeOnePiece={removeOnePiece}
                                key={item.name}/>
        </div>
    )
}

const ItemActiveListStore = ({ item, addItem, deleteItem, removeOnePiece }) => {
    const activeList = useSelector(activeListSelector)
    const dispatch = useDispatch()
    
    const [check, setCheck] = useState(item.check)

    useEffect(() => {
        setCheck(item.check)
    },[activeList.completed])

    const changeCheck = useCallback((item, check) => {
        setCheck(check)
        dispatch(changeCheckItem(item, check))
    })

    return <ItemActiveList item={item} 
                           addItem={addItem} 
                           deleteItem={deleteItem} 
                           removeOnePiece={removeOnePiece} 
                           check={check} 
                           changeCheck={changeCheck}
                           activeList={activeList}/>
}


export default ItemActiveListStore