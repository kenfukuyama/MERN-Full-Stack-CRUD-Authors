import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams} from "react-router-dom";
import { useNavigate} from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const UpdateProduct = (props) => {
    // const history = useHistory();
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                // setFirstName(res.data.firstName);
                // setLastName(res.data.lastName);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                console.log(res.data)
            })
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>


                <input type="submit" />
            </form>
            <DeleteButton authorId={id} successCallback={()=> { navigate("/")}}/>
        </div>
    )
}
    
export default UpdateProduct;