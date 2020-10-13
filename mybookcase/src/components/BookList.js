import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book.js'

const BookList = (props) => {
    return ( <div>
        {props.books.map(book => (
        <Book key={book.id} book={book} addBook={props.addBook} /> 
        ))}
    </div> )
}

export default BookList;