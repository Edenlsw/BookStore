import React from 'react';
import PropTypes from 'prop-types';
import BookCounter from './BookCounter';


const Book = (props) => {
    let {
        id,
         volumeInfo: { title, authors, description,  imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
        // remove amount line
    } = props.book;

 
        
    return (
        <div>
            <h2>{title}</h2>
            <p>by {authors ? authors.join(', '): 'No Authors'}</p>
            <p>£ {listPrice && listPrice.amount}</p>
            <p>{description}</p>
            <img src={smallThumbnail || thumbnail}/>
            {props.addBook && (
                <button 
                onClick={() => props.addBook(title, id)}>Add
                </button>
            )}
            {props.removeBook && (
                <button 
                onClick={() => props.removeBook(id)}>Remove
                </button>
            )}
            
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