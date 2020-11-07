import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Book from './Book.js';
import Pagination from './Pagination';
import App from '../App';


const BookList = (props) => {
    // const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    // can change number of books displayed per page 
    const [booksPerPage] = useState (10);

    // Get current books

    const indexOfLastBook = props.currentPage * booksPerPage;
    const indexOfFirstBook= indexOfLastBook - booksPerPage;
    const currentBooks = props.books.slice(indexOfFirstBook, indexOfLastBook);

    // const paginate = pageNumber => setCurrentPage(pageNumber);
    
    

    return ( 
    <div>
        {currentBooks.map(book => (
            <>
            <Book key={book.id} book={book} currentBooks={currentBooks} addBook={props.addBook} removeBook={props.removeBook}/>
           
            <books books={currentBooks} loading={loading}/>
           
           
           
           
           
           
        {/* <Pagination booksPerPage={booksPerPage} totalBooks={props.books.length} paginate={paginate}/>  */}

           
           
            {/* Still working on code below- comment out to stop break  */}


            {/* <Books books={currentBooks} loading={loading}/>    
            <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/> */}
            
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