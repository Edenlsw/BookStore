// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import books from './books.json';

// const formatter = new Intl.NumberFormat('en-GB', {
// style: 'currency',
// currency: 'GBP'
// })


// const element = <Fragment>
  
//   {books.map((book) => {
//     let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice} }= book;
//     return (<div>
//       <p>{title}, {authors}</p>
//       </div>)
//   })}
// </Fragment>;

// ReactDOM.render(element,document.getElementById('root'));











// const book = books[0];
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
// const element = <Fragment>
// <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;
// ReactDOM.render(element,document.getElementById('root'));



// copied content for task 

// const book = books[0];
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;
// const element = <Fragment>
// <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;
// ReactDOM.render(element,document.getElementById('root'));






// session work unsure about 

// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import books from './books.json';

// const formatter = new Intl.NumberFormat('en-GB', {
// style: 'currency',
// currency: 'GBP'
// })

// function allBooks() {
//   let elements = []

//   for (i = 0; i < books.length; i++)
// const book = books[0];

// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = book;

// const element = <Fragment>
// <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;

// elements.push(element)
// }
// return element


// ReactDOM.render(allbooks(),document.getElementById('root'));
























import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import BookCounter from './BookCounter';
const element = <Fragment>
<h1>Welcome to My Library</h1>
<BookCounter library={{name:"Eden",theme:"Modern"}}/>
</Fragment>;
ReactDOM.render(element,document.getElementById('root'));













// session 2

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';











// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // const name = "Eden";
// // function Greeting(user) {
// //   if (user) {
// //   return <h1>{name}'s Reading List</h1>;
// //   }
// //   return <h1> Just a Reading List</h1>
// // }

// // console.log(Greeting(name));
// // ReactDOM.render(Greeting(name), document.getElementById('root'));


// // previous tasks
// // const element = <h1>{name}'s Reading List</h1>;


// // const element = <h1>Welcome to the Book Library</h1>;
// // console.log(element)
// // ReactDOM.render(element, document.getElementById('root'))





// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();