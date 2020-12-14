import InfoItemStore from "../infoItem/infoItem"
import ShoppingListStore from "../shoppingList/shoppingList"
import WrapperAddItemStore from "../wrapperAddItem/wrapperAddItem"

import './rigthWrapper.scss'

export const RigthWrapper = () => {
    return(
        <div className="rigthWrapper">
            <div className="rigthWrapper__container">
                <WrapperAddItemStore/>
                <ShoppingListStore/>
                <InfoItemStore/>
            </div>
        </div>
    )
}

const RigthWrapperStore = () => {
    return <RigthWrapper/>
}

export default RigthWrapperStore