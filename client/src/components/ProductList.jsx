import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';
    
    
const ProductList = (props) => {
    

    // * before modulizing DeleteButton
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {

        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
        }


    return (
        <div>
            {props.products.map( (product, i) =>
                <div key={i}>
                    {product.title}, {product.price}, {product.description}  <br/>
                    <Link className="btn btn-primary" to={"/products/" + product._id}>{product.title}</Link> |
                    {/* <button className="btn btn-danger" onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button> */}
                    <DeleteButton productId={product._id} successCallback={()=> { deleteProduct(product._id) }}/>

                </div>
            )}
        </div>
    )
}
    
export default ProductList;