import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Book from './Book.js';
import Pagination from './Pagination';
import App from '../App';


const BookList = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [booksPerPage] = useState (10);

    // Get current books

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook= indexOfLastBook - booksPerPage;
    const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    











    return ( 
    <div>
        {currentBooks.map(book => (
            <>
            <Book key={book.id} book={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook}/>
            {/* Still working on code below- comment out to stop break  */}



            <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/>
            
            </>


        /* <Book  */
        /* // key={book.id}
        // book={book} 
        // addBook={props.addBook} 
        // removeBook={props.removeBook}
        // />  */


        ))}
    </div> 
    );
};






export default BookList;