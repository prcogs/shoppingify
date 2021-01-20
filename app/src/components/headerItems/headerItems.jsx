import SearchBarItemsStore from"../searchBarItems/searchBarItems"

import './headerItems.scss'

const HeaderItems = () => {
    return (
        <div className="headerItems">
            <p><strong className="headerItems__strong">Shoppingify</strong> allows you take your shopping list wherever you go</p>
            <SearchBarItemsStore/>
        </div>
    )
}

export default HeaderItems