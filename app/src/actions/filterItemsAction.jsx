import { UPDATE_FILTER_ITEMS } from "../constants";



export const filterItems = (value) => ({
    type : UPDATE_FILTER_ITEMS,
    payload : value
})