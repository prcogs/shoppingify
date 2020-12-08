import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../actions/filterNavBarActions"
import { filterNavBarSelector } from "../../selectors/filterNavBarSelector"

import './navBar.scss'


const NavBar = ({value, onChange}) => {
    return <div class="navBar">
        <ul>
            <li onClick={() => {onChange("items")}}>
                <strong style={{color: value === "items" ? "red" : ""}}>items</strong>
            </li>
            <li onClick={() => {onChange("historyList")}}>
            <strong style={{color: value === "historyList" ? "red" : ""}}>historyList</strong>
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