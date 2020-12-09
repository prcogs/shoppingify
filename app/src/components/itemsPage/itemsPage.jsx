import { useSelector } from 'react-redux'

import ItemStore from '../item/item'
import HeaderItems from "../headerItems/headerItems"
import { filteredItemsSelector } from '../../selectors/itemsSelector'

import './itemsPage.scss'

export const ItemsPage = ({ items }) => {
    
    return (
        <div className="itemsPage">
            <HeaderItems/>
            {items.map((item, i) => {
                return (
                    <div className="itemsPage__container">  
                        <strong className="itemsPage__category">{item[0].category}</strong>
                        <div className="itemsPage_items">
                            {item.map((item, i) => {
                                return <ItemStore item={item} key={i}/>
                            })}
                        </div>
                    </div>
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