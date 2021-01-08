import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../actions/filterNavBarActions"
import { filterNavBarSelector } from "../../selectors/filterNavBarSelector"
import svg from '../../images/logo.svg'

import './navBar.scss'
import { deconnect } from "../../actions/authAction"


const NavBar = ({value, isShownItems, isShownHistory, onChange, changeShownItems, changeShownHistory, deconnectUser}) => {
    return (
        <div className="navBar">
            <img className="navBar__icoSite" src={svg} alt="Logo shoppingify" onClick={() => {deconnectUser()}} title="Logout"/>            
             <div className="navBar__container">
             {isShownItems && (
                            <p className="navBar__text--items navBar__text">Items</p>
                        )}
                <table>
                    <tbody>
                        <tr className="navBar__tr">
                            <td className={value === "items" ? "navBar--active" : "navBar--disable"}></td>
                            <td onClick={() => {onChange("items")}} 
                                onMouseEnter={() => {changeShownItems(true)}}
                                onMouseLeave={() => {changeShownItems(false)}}
                                className="navBar__td">
                                <i className="fa fa-bars navBar__icon" aria-hidden="true"></i>
                                
                            </td>    
                        </tr>
                    
                        <tr className="navBar__tr">
                            <td className={value === "historyList" ? "navBar--active" : "navBar--disable"}></td>
                            <td onClick={() => {onChange("historyList")}}
                                onMouseEnter={() => {changeShownHistory(true)}}
                                onMouseLeave={() => {changeShownHistory(false)}} 
                                className="navBar__td">
                                <i className="fa fa-repeat fa-flip-horizontal navBar__icon" aria-hidden="true"></i>
                            </td>    
                        </tr>
                    </tbody>
                </table>
            {isShownHistory && (
                            <p className="navBar__text--history navBar__text">History</p>
                        )}
            </div>
            <button className="navBar__icoShop"><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
        </div> 
    ) 
}

const NavBarStore = () => {
    const [isShownItems, setIsShownItems] = useState(false);
    const [isShownHistory, setIsShownHistory] = useState(false);

    const changeShownItems = useCallback((boolean) => {
        setIsShownItems(boolean)
    },[isShownItems])

    const changeShownHistory = useCallback((boolean) => {
        setIsShownHistory(boolean)
    },[isShownHistory])

    const value = useSelector(filterNavBarSelector)
    const dispatch = useDispatch()
    const onChange = useCallback((value) => {
        dispatch(updateFilter(value))
    },[])

    const deconnectUser = useCallback(() => {
        dispatch(deconnect())
    })


    return <NavBar value={value} 
                   isShownItems={isShownItems}
                   isShownHistory={isShownHistory} 
                   onChange={onChange}
                   changeShownHistory={changeShownHistory} 
                   changeShownItems={changeShownItems}
                   deconnectUser={deconnectUser}/>
}

export default NavBarStore 