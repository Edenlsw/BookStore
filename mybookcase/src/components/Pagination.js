import React, { useState, useEffect } from 'react';
import { PageItem } from 'react-bootstrap';
import "./Pagination.css"
import "./Book.css"

const Pagination = ({booksPerPage, totalBooks,paginate}) => {
    const pageNumbers =[];
    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i)
    }
    const handleSubmit =(event,number) => {
        event.preventDefault();
        paginate(number)
    }
    return (
     <nav> 
         <ul className='pagination'>
           {pageNumbers.map(number => (
             <li key={number} className='page-item'>
             <a onClick={event => handleSubmit(event, number)} href='!#' className='page-link'>
                {number}
              </a>
            </li>
           ))}   
        </ul>
     </nav>
    );
};
export default Pagination






// const Pagination = (booksPerPage, totalBooks, paginate) => {
    
//     const pageNumbers = [];

//     for(let i = 1; 1 <= Math.ceil(totalBooks / booksPerPage); i++) {
//         console.log('pageNumbers', pageNumbers)
//         pageNumbers.push(i);
        
//     }

//     console.log(booksPerPage)
//     console.log(totalBooks)
//     console.log(paginate)


//     return (
//         <nav>
//             <ul className="pagination">
//                 {pageNumbers.map(number => 
//                 <li key={number} className="page-item">
//                     <a onClick={() => paginate(number)} href="!#" className="page-link">{number}</a>
//                 </li>  
//                 )}  
//             </ul>
//         </nav>
//     )
//  }   




// export default Pagination; 
