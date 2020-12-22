import { useDispatch, useSelector } from "react-redux"
import { useCallback } from 'react'

import { addItemInList } from '../../actions/activeListAction'
import { changeStateInfoItem } from '../../actions/infoItemAction'
import { infoItemSelector } from '../../selectors/infoItemSelector'

import './infoItem.scss'

export const InfoItem = ( { infoItem, disableInfoItem, addItem }) => {
    return (
        <div className={infoItem.active ? " infoItem infoItem--active" : "infoItem--disable"}>
            <div className="infoItem__container">
                <button onClick={() => {disableInfoItem(false, {})}}><i className="fa fa-long-arrow-left" aria-hidden="true"></i> back</button>
                <img src={`../../images/${infoItem.item.image}`} alt={infoItem.item.name}/>
                <p>name</p>
                <p>{infoItem.item.name}</p>
                <p>category</p>
                <p>{infoItem.item.category}</p>
                <p>note</p>
                <p>{infoItem.item.note}</p>
                <button onClick={() => addItem(infoItem.item.name, infoItem.item.category)}>Add to list</button>
            </div>
        </div>
    )
}


const InfoItemStore = () => {
    const infoItem = useSelector(infoItemSelector)

    const dispatch = useDispatch()
    const disableInfoItem = useCallback((active, item) => {
        dispatch(changeStateInfoItem(active, item))
    },[])
    const addItem = useCallback((name, category) => {
        dispatch(addItemInList(name, 1, false, category))
    },[])

    return <InfoItem infoItem={infoItem} disableInfoItem={disableInfoItem} addItem={addItem}/>
}


export default InfoItemStore