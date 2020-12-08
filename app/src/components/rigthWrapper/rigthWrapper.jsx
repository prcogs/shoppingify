import ShoppingListStore from "../shoppingList/shoppingList"
import WrapperAddItemStore from "../wrapperAddItem/wrapperAddItem"

import './rigthWrapper.scss'

export const RigthWrapper = () => {
    return(
        <div className="rigthWrapper">
            <WrapperAddItemStore/>
            <ShoppingListStore/>
            rigth
        </div>
    )
}

const RigthWrapperStore = () => {
    return <RigthWrapper/>
}

export default RigthWrapperStore