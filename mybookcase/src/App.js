import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Book from './components/Book';
import About from './pages/About';
import data from './models/books.json';
import Header from './components/Header';
import BookList  from './components/BookList.js';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Apps.css"
import Pagination from './components/Pagination';
// import BookCounter from './components/BookCounter';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(6);
  const [ keyword, setKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [count, setCount] = useState(0);
  const paginate = pageNumber => setCurrentPage(pageNumber);



          // <Pagination booksPerPage={booksPerPage} totalBooks={props.books.length} paginate={paginate}/> 
          
  useEffect (() => {
    document.title = `${count} Book(s) Added To Bookcase`
  });



  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    const chosenBook = books.filter((book) => book.id === id);
    console.log(newBookList)
    setBooks(newBookList);
    setBookcase([...bookcase, ... chosenBook]);
    console.log(`The Book ${title} was clicked`);
    setCount(count +1);
    }

    function removeBook(id) {
      const newBookcaseList = bookcase.filter((book) => book.id !== id); 
      setBookcase(newBookcaseList);
      setCount(count -1);
    }

   



    

    async function findBooks (term) {
      const results = await fetch (
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
      setBooks(results.items);

    }

    

  return (
    <>
    <Router>
    <Route 
    exact path="/" render={() => (
      <React.Fragment>
        <Header/>
        <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
        <BookList currentPage={currentPage} books={books} addBook={addBook} /> 

        <Pagination booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/> 
 
      </React.Fragment>
    )} />

    


    
    <Route 
    exact path="/bookcase" render={() => (
      <React.Fragment>
        <Header/>
                <BookList currentPage={currentPage} books={bookcase} removeBook={removeBook} />
        {/* testing book count  */}
            
      
      </React.Fragment>
    )} />

<Route exact path="/about" render={() => (
      <React.Fragment>
        <Header/>
        <About/>  
      </React.Fragment>
    )} />


    </Router> 
    </>
  );
} 





export default App;