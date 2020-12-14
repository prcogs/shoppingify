import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"

import ItemStore from '../item/item'
import HeaderItems from "../headerItems/headerItems"
import { filteredItemsSelector } from '../../selectors/itemsSelector'
import { getItem } from "../../actions/itemAction"

import './itemsPage.scss'


export const ItemsPage = ({ items, loading }) => {
    
    return (
        <div className="itemsPage">
            <HeaderItems/>
            {loading ? "chargement" : items.map((item, i) => {
                return (
                    <div className="itemsPage__container" key={i}>  
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
    const [loading, isLoading] = useState(true)

    const items = useSelector(filteredItemsSelector)
    
    const dispatch = useDispatch()

    useEffect(async () => {
        isLoading(true)
        await dispatch(getItem())
        isLoading(false)
    },[])

    return <ItemsPage items={items} loading={loading}/>
}

export default ItemsPageStore