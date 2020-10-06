import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import books from './books.json';

const formatter = new Intl.NumberFormat('en-GB', {
style: 'currency',
currency: 'GBP'
})
















// // const book = books[0];
// const element = <Fragment>
// {books.map((book) => {
//   let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice:}} = book;
//   return (<div>
//     <p>{title}, {authors}</p>
//   </div>)
// })}



// {/* <h1 id={id}>{title} = {formatter.format(amount)}</h1> */}
// </Fragment>;
// ReactDOM.render(element,document.getElementById('root'));