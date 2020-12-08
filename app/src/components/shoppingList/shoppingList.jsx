import ActiveListStore from "../activeList/activeList"


export const ShoppingList = () => {
    return (
        <div>
            <button>Add List</button>
            <ActiveListStore/>
        </div>
    )
}

const ShoppingListStore = () => {
    return <ShoppingList/>
}

export default ShoppingListStore