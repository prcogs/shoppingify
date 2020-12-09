import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../actions/filterNavBarActions"
import { filterNavBarSelector } from "../../selectors/filterNavBarSelector"

import './navBar.scss'


const NavBar = ({value, onChange}) => {
    return <div className="navBar">
        <ul>
            <li className={value === "items" ? "navBar--active" : ""} onClick={() => {onChange("items")}}>
                <strong ><i className="fa fa-bars navBar__icon" aria-hidden="true"></i></strong>
            </li>
            <li className={value === "historyList" ? "navBar--active" : ""} onClick={() => {onChange("historyList")}}>
            <strong ><i className="fa fa-repeat fa-flip-horizontal navBar__icon" aria-hidden="true"></i></strong>
            </li>
        </ul>
    </div>  
}

const NavBarStore = () => {
    const value = useSelector(filterNavBarSelector)
    const dispatch = useDispatch()
    const onChange = useCallback((value) => {
        dispatch(updateFilter(value))
    },[])


    return <NavBar value={value} onChange={onChange}/>
}

export default NavBarStore 