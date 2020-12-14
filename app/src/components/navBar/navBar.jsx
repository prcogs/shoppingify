import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../actions/filterNavBarActions"
import { filterNavBarSelector } from "../../selectors/filterNavBarSelector"

import './navBar.scss'


const NavBar = ({value, isShownItems, isShownHistory, onChange, changeShownItems, changeShownHistory}) => {
    return (
        <div className="navBar">
             
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


    return <NavBar value={value} 
                   isShownItems={isShownItems}
                   isShownHistory={isShownHistory} 
                   onChange={onChange}
                   changeShownHistory={changeShownHistory} 
                   changeShownItems={changeShownItems}/>
}

export default NavBarStore 