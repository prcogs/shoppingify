import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { removeMessageAPI } from "../../actions/activeListAction"
import { activeListSelector } from "../../selectors/activeListSelector"
import InfoItemStore from "../infoItem/infoItem"
import ShoppingListStore from "../shoppingList/shoppingList"
import WrapperAddItemStore from "../wrapperAddItem/wrapperAddItem"

import './rigthWrapper.scss'

export const RigthWrapper = ({ messageAPI, succes, viewMessage }) => {
    return(
        <div className="rigthWrapper">
            <div className="rigthWrapper__container">
                {/* {viewMessage && <p>{viewMessage && messageAPI + ' ' + succes}</p>} */}
                <WrapperAddItemStore/>
                <ShoppingListStore/>
                <InfoItemStore/>
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

    // useEffect(() => {
    //     setViewMessage(true)
    //     setTimeout(() => setViewMessage(false), 10000)
    //     removeMessage()
    // },[activeList.messageAPI,  activeList.succes])

    return <RigthWrapper messageAPI={activeList.messageAPI} succes={activeList.succes} viewMessage={viewMessage}/>
}

export default RigthWrapperStore