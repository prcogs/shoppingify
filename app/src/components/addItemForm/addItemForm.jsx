import { useCallback, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { addItemInList } from "../../actions/activeListAction"
import { changeStateAddItemForm } from "../../actions/addItemFormAction"
import { addItemFormSelector } from "../../selectors/addItemFormSelector"

import './addItemForm.scss'

const AddItemForm = ({ addItemForm, disableAddItemForm, addItem }) => {
    const [category, setCategory] = useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const name = useRef(null)
    const note = useRef(null)
    const image = useRef(null)

    return (
        <div className={addItemForm.active ? "addItemForm addItemForm--active" : "addItemForm--disable"}>
                <div className="addItemForm__container">

                <p>Add a new item</p>
                
                <label htmlFor="name">Name</label><br/>
                <input type="text" placeholder="Enter a name" ref={name}/>

                <label htmlFor="note">Note (optional)</label><br/>
                <textarea placeholder="Enter a note" ref={note}/>

                <label htmlFor="image">Image (optional)</label><br/>
                <input type="text" placeholder="Enter a url" ref={image}/>

                <FormControl variant="outlined" className="addItemForm__select">
                    <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                    <Select
                        native
                        value={category}
                        onChange={handleChange}
                        label="Category"
                        inputProps={{
                            name: 'category',
                            id: 'outlined-age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="Beverages">Beverages</option>
                        <option value="Fruit and vegetables">Fruit and vegetables</option>
                        <option value="Meat and Fish">Meat and Fish</option>
                    </Select>
                </FormControl>

                <div className="addItemForm__btn">
                    <button onClick={() => {disableAddItemForm(false)}}>cancel</button> 
                    <button onClick={() => addItem(name.current.value, note.current.value, image.current.value, category)}>Add to list</button> 
                </div>

            </div>
        </div>
    )
}

const AddItemFormStore = () => {
    const addItemForm = useSelector(addItemFormSelector)

    const dispatch = useDispatch()
    const disableAddItemForm = useCallback((active) => {
        dispatch(changeStateAddItemForm(active))
    })

    const addItem = useCallback((name, note, image, category) => {
        dispatch(addItemInList(name, 1, false, category))
    })

    return <AddItemForm addItemForm={addItemForm} disableAddItemForm={disableAddItemForm} addItem={addItem}/>
}

export default AddItemFormStore