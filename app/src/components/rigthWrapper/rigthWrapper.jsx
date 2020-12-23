import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { removeMessageAPI } from "../../actions/activeListAction"
import { activeListSelector } from "../../selectors/activeListSelector"
import AddItemFormStore from "../addItemForm/addItemForm"
import InfoItemStore from "../infoItem/infoItem"
import ShoppingListStore from "../shoppingList/shoppingList"
import WrapperAddItemStore from "../wrapperAddItem/wrapperAddItem"

import './rigthWrapper.scss'

export const RigthWrapper = ({ messageAPI, succes, viewMessage }) => {
    return(
        <div className="rigthWrapper">
            <div className="rigthWrapper__container">
                {(viewMessage && messageAPI !== undefined) ? <p className={"msgAPI" +' '+ "msgAPI--" + succes +' '+"slideLeft"} >{messageAPI}</p> : ""}

                <WrapperAddItemStore/>
                <ShoppingListStore/>
                <InfoItemStore/>
                <AddItemFormStore/>
            </div>
        </div>
    )
}

const RigthWrapperStore = () => {
    const activeList = useSelector(activeListSelector)
    const [viewMessage, setViewMessage] = useState(false)

    const dispatch = useDispatch()
    const removeMessage = useCallback(() => {
        dispatch(removeMessageAPI())
    })

    useEffect(() => {
        setViewMessage(true)
        setTimeout(() => {setViewMessage(false);removeMessage()}, 7000)
    },[activeList.succes])

    return <RigthWrapper messageAPI={activeList.messageAPI} succes={activeList.succes} viewMessage={viewMessage}/>
}

export default RigthWrapperStore