import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const DetailProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>price: {product.price}</p>
            <p>description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}
    
export default DetailProduct;