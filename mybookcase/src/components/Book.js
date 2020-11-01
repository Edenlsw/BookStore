import React, { Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from '../App';





const Book = (props) => {
    let {
        id,
         volumeInfo: { title, authors, description,  imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
        // remove amount line
    } = props.book;

  
    
   
    
    return (
        <div className="books">
            <div>
                
                <h2 className="book-title">{title}</h2>
                <p className="authors"> by {authors ? authors.join(', '): 'No Authors'}</p>
                <img src={smallThumbnail || thumbnail}/>
                <p className="price"> £ {listPrice && listPrice.amount}</p>
               
            </div>
          
                {/* <img src={smallThumbnail || thumbnail}/> */}
                <p>{description}</p>
           
            <div>
                {props.addBook && (
                    <button className="addbtn"
                onClick={() => props.addBook(title, id)} > Add </button>
                    
                )}
                {props.removeBook && (
                    <button className="removebtn" 
                    onClick={() => props.removeBook(id)}>Remove
                    </button>
                )}
            </div>
            
            
        </div>
    );
}


Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string, 
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            authors: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                smallThumbnail: PropTypes.string
            })
        }),
        
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number.isRequired
            })
        })

        
    })

}





export default Book;