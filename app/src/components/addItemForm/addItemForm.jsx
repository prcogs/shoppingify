import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from '@hookform/resolvers/dist/yup';
import { useForm } from "react-hook-form";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { addItemInList } from "../../actions/activeListAction"
import { changeStateAddItemForm } from "../../actions/addItemFormAction"
import { addItemFormSelector } from "../../selectors/addItemFormSelector"
import { schemaAddItem } from "../../lib/schemaForm";

import './addItemForm.scss'

const AddItemForm = ({ addItemForm, disableAddItemForm, addItem }) => {
    const [category, setCategory] = useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const { register, handleSubmit, errors } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schemaAddItem)
    })

    const onSubmit = (data, e) => {
        // e.preventDefault()
        console.log(data.name, data.note, data.image, data.category)
        addItem(data.name, data.note, data.image, data.category)
    }

    return (
        <form className={addItemForm.active ? "addItemForm addItemForm--active" : "addItemForm--disable"} onSubmit={handleSubmit(onSubmit)}>
            <div className="addItemForm__container">

                <p>Add a new item</p>
                
                <label htmlFor="name">Name</label><br/>
                {errors.name && <span className="inputErrors">{errors.name.message}</span>}
                <input type="text" placeholder="Enter a name" name="name" ref={register}/>

                <label htmlFor="note">Note (optional)</label><br/>
                {errors.note && <span className="inputErrors">{errors.note.message}</span>}
                <textarea placeholder="Enter a note" name="note" ref={register}/>

                <label htmlFor="image">Image (optional)</label><br/>
                <input type="text" placeholder="Enter a url" name="image" ref={register}/>

                {errors.category && <span className="inputErrors inputErrors--category">{errors.category.message}</span>}
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
                        inputRef={register}
                        name="category"
                    >
                        <option aria-label="None" value="" />
                        <option value="Beverages">Beverages</option>
                        <option value="Fruit and vegetables">Fruit and vegetables</option>
                        <option value="Meat and Fish">Meat and Fish</option>
                    </Select>
                </FormControl>

                <div className="addItemForm__btn">
                    <button>Add to list</button>
                    <button type="button" onClick={() => {disableAddItemForm(false)}}>cancel</button> 
                </div>
            </div>
        </form>
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