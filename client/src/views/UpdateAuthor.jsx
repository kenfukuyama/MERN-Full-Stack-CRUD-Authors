import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams} from "react-router-dom";
import { Link} from "react-router-dom";
    
const UpdateAuthor = (props) => {
    // const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                // setFirstName(res.data.firstName);
                // setLastName(res.data.lastName);
                setName(res.data.name);
                console.log(res.data)
            })
    }, [id]);
    
    const updateAuthor = e => {
        e.preventDefault();
        if (name.length < 3) {
            setErrors([...errors, "has to be 3 characters"]);
            return;
        }
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
                <p>
                    
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" value="Update"/>
            </form>
                
                
                
                <Link className="btn btn-warning" to={"/"}>Cancel</Link>

        </div>
    )
}
    
export default UpdateAuthor;