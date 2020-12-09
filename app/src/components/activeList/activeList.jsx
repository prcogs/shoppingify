import { useSelector } from "react-redux"
import { filteredItemsInActiveListSelector } from "../../selectors/activeListSelector"

import './activeList.scss'

export const ActiveList = ({ items }) => {
    return(
        <div className="activeList">
            {items.map((item, i) => {
                return (
                    <div className="activeList__container">
                        <strong className="activeList__category">{item[0].category}</strong>
                        <div className="activeList__items">
                            {item.map((item, i) => {
                                return(
                                    <div className="activeList__item">
                                        <p>{item.name}</p>
                                        <p>{item.number} pc{item.number > 1 ? "s" : "" }</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const ActiveListStore = () => {
    const items = useSelector(filteredItemsInActiveListSelector)

    return <ActiveList items={items}/>
}

export default ActiveListStore