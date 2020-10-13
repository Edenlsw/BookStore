import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import BookList  from './components/BookList.js';
import About from './pages/About';
import Search from './components/Search';


const App = (props) => {

  const [books, setBooks] = useState(data);

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    setBooks(newBookList);
    console.log(`The Book ${title} was clicked`);
    }


  return (
    <Router>
    <Route 
    exact path="/" render={() => (
      <React.Fragment>
        <Header/>
        <Search />
        <BookList books={books} addBook={addBook}/>  
      </React.Fragment>
    )} />
    
    <Route 
    exact path="/bookcase" render={() => (
      <React.Fragment>
        <Header/>
        <Search/>
        <BookList books={books} addBook={addBook}/>  
      </React.Fragment>
    )}
    />

<Route 
    exact path="/About" render={() => (
      <React.Fragment>
        <Header/>
        <About/>  
      </React.Fragment>
    )}
    />

    </Router> 
    
  );
} 





export default App;