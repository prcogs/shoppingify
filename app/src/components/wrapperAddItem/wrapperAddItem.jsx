import './wrapperAddItem.scss'
import svg from '../../images/source.svg'

export const WrapperAddItem = () => {

    return(
        <div className="wrapperAddItem">
            <img src={svg} className="wrapperAddItem__svg" alt="Sauce en bouteille"/>
            <div className="wrapperAddItem__container">
                <p>Didn't find what you need ?</p>
                <button className="btn">Add Item</button>
            </div>
            
        </div>
    )
}

const WrapperAddItemStore = () => {
    return <WrapperAddItem/>
}

export default WrapperAddItemStore