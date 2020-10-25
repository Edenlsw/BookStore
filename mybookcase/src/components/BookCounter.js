import React, {useState} from 'react';


const BookCounter = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div className="booklist">
    <h1>{props.library.name}'s Books ({count})	&#8595;</h1>
    <button 
      onClick={() => setCount(count + 1)}>Count Books</button>

  
      
    </div>
  );
}

export default BookCounter;
