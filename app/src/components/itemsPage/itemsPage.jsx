import { useSelector } from 'react-redux'

import ItemsStore from '../items/items'
import HeaderItems from "../headerItems/headerItems"
import { filteredItemsSelector } from '../../selectors/itemsSelector'



export const ItemsPage = ({ items }) => {
    
    return (
        <div>
            <HeaderItems/>
            {items.map((item, i) => {
                return (
                    <>  
                        {item[0].category}
                        {item.map((item, i) => {
                            return <ItemsStore item={item} key={i}/>
                        })}
                    </>
                )
            })}
        </div>
    )
}

const ItemsPageStore = () => {
    const items = useSelector(filteredItemsSelector) 

    return <ItemsPage items={items}/>
}

export default ItemsPageStore