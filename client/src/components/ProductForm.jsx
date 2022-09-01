import React, { useState } from 'react'
// import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const {onSubmitProp} = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // * for errors
    // const [errors, setErrors] = useState([]); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // * before
        // axios.post('http://localhost:8000/api/products', {
        //     title,
        //     description,
        //     price
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        //* after
        onSubmitProp({title, description,price});
    }
    //onChange to update title and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default ProductForm;