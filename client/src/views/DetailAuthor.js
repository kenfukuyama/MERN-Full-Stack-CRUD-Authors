import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const DetailAuthor = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <p>Name: {author.name}</p>
            <Link to={"/authors/" + author._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}
    
export default DetailAuthor;