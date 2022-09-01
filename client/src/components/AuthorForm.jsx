import React, { useState } from 'react'
// import axios from 'axios';
const AuthorForm = (props) => {
    //keep track of what is being typed via useState hook
    const {onSubmitProp} = props;
    const [name, setName] = useState(""); 

    // * for errors
    // const [errors, setErrors] = useState([]); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        // * before
        // axios.post('http://localhost:8000/api/authors', {
        //     name,
        //     description,
        //     price
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        //* after
        onSubmitProp({name});
    }
    //onChange to update name and description
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default AuthorForm;