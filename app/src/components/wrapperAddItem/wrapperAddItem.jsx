import './wrapperAddItem.scss'
import svg from '../../images/source.svg'
import { useDispatch } from 'react-redux'
import { changeStateAddItemForm } from '../../actions/addItemFormAction'
import { useCallback } from 'react'

export const WrapperAddItem = ({ activeAddItemForm }) => {

    return(
        <div className="wrapperAddItem">
            <img src={svg} className="wrapperAddItem__svg" alt="Sauce en bouteille"/>
            <div className="wrapperAddItem__container">
                <p>Didn't find what you need ?</p>
                <button className="btn" onClick={() => {activeAddItemForm(true)}}>Add Item</button>
            </div>
            
        </div>
    )
}

const WrapperAddItemStore = () => {
    const dispatch = useDispatch()
    const activeAddItemForm = useCallback((active) => {
        dispatch(changeStateAddItemForm(active))
    })

    return <WrapperAddItem activeAddItemForm={activeAddItemForm}/>
}

export default WrapperAddItemStore