import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteList, updateInActiveList } from '../../actions/activeListAction'
import reverseFilterItems from '../../lib/reverseFilterItems'
import ItemStore from '../item/item'

import './list.scss'


export const List = ({ list, updateList, viewAll, changeView, deleteOneHistoryList }) => {

    return (
        <div className="list">
            <div className="list__container" onClick={() => {changeView(viewAll)}}>
                <p>{list.name}</p>
                <p><strong><i className="fa fa-calendar" aria-hidden="true"></i></strong> 
                   <strong>{list.date}</strong> 
                   {list.completed ? <strong style={{color:"#56CCF2", border: "1px solid #56CCF2"}}>completed</strong> : <strong style={{color:"#EB5757", border: "1px solid #EB5757"}}>cancelled</strong> } 
                   <button onClick={(e) => {updateList(reverseFilterItems(list)); e.stopPropagation()}}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </p>
            </div>
            {viewAll && 
            <div className="list__detail">
                <button className="list__btn" onClick={() => {deleteOneHistoryList(list.name)}}>Delete list</button>
                { list.items.length === 0   ? <div style={{"marginBottom": "1rem"}}>No items</div> 
                                            : list.items.map((item, i) => {
                                                return (
                                                    <div className="list__itemsPage" key={i}>  
                                                        <strong className="itemsPage__category">{ item[0].category }</strong>
                                                        <div className="itemsPage_items">
                                                            {item.map((item, i) => {
                                                                return <ItemStore item={item} view="update" key={i}/>
                                                            })}
                                                        </div>
                                                    </div>
                                                )
                })}
            </div>}
        </div>
    )
}

const ListStore = ({ list }) => {
    const [viewAll, setViewAll] = useState(false)

    const changeView = useCallback((view) => {
        setViewAll(!view)
    })

    const dispatch = useDispatch()
    const updateList = useCallback((list) => {
        dispatch(updateInActiveList(list))
    })

    const deleteOneHistoryList = useCallback((name) => {
        dispatch(deleteList(name))
    })

    return <List list={list} 
                 updateList={updateList} 
                 viewAll={viewAll} 
                 changeView={changeView} 
                 deleteOneHistoryList={deleteOneHistoryList}/>
}

export default ListStore