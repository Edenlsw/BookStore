import React from "react";
// import Button from './Button';

function Product (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.author}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <img src={props.src} alt={props.alt}/>
            <p><button></p>
            
           
           

           
        </div>    
    )
}

export default Product;