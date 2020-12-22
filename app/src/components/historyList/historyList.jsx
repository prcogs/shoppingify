import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getHistoryList } from "../../actions/historyListAction"
import { activeListSelector } from "../../selectors/activeListSelector"
import { historyListSelector, filteredHistoryList } from "../../selectors/historyListSelector"
import ListStore from '../list/list'

import './historyList.scss'

export const HistoryList = ({ lists, loading }) => {
    return (
        <div className="historyList">
            <p className="historyList__title">Shopping history</p>
            {!loading && lists.map((list, i) => {
                return <ListStore list={list} key={i}/>
            })}
        </div>
    )
}

const HistoryListStore = () => {
    const lists = useSelector(filteredHistoryList)
    const activeList = useSelector(activeListSelector)
    const [loading, isLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(async () => {
        isLoading(true)
        await dispatch(getHistoryList())
        isLoading(false)
    },[activeList.update])


    return <HistoryList lists={lists} loading={loading}/>
}

export default HistoryListStore