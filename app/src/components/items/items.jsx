import { useSelector } from "react-redux"

import { itemsSelector } from '../../selectors/itemsSelector'


export const Items = ({ item }) => {
    return (
        <div>
            {item.name}
        </div>
    )
}

const ItemsStore = ({ item }) => {
    return <Items item={item}/>
}

export default ItemsStore