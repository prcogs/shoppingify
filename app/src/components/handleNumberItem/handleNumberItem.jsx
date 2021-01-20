import { useCallback, useState } from "react"


const HandleNumberItem = ({ item, addItem, deleteItem, removeOnePiece }) => {
    const [view, setView] = useState(true)
    const changeView = useCallback((boolean) => {
        setView(boolean)
    })

    if(view) {
        return (
            <div className="activeList__number" onClick={()=> {changeView(false)}}>
                {item.number} pc{item.number > 1 && "s"}
            </div>
        )
    }

    else {
        return (
            <div className="activeList__btns" onMouseLeave={() => {changeView(true)}}>
                <button onClick={() => deleteItem(item.name)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                <button onClick={() => removeOnePiece(item.name, item.number, item.check, item.category)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                <p className="activeList__number activeList__number--active">{item.number} pc{item.number > 1 && "s"}</p>
                <button onClick={() => addItem(item.name, item.category)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default HandleNumberItem