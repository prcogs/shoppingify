import { useSelector } from "react-redux"
import { filterNavBarSelector } from "../../selectors/filterNavBarSelector"

import HistoryList from '../historyList/historyList'
import ItemsPageStore from '../itemsPage/itemsPage'

import './mainWrapper.scss'



const MainWrapper = ({filter}) => {

    return (
        <div className="mainWrapper">
            {filter === "items" ? <ItemsPageStore/> : <HistoryList />}
        </div>
    )
}


const MainWrapperStore = () => {
    const filter = useSelector(filterNavBarSelector)

    return <MainWrapper filter={filter}/>
}


export default MainWrapperStore 