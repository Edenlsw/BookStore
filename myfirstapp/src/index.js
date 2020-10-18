import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const LogForm = () => {
  const [name,setName] = useState('');
  const [age, setAge] = useState('');  
  const [location, setLocation] = useState('');
  const [hasSubmitted, setSubmitted] = useState(false);


 
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true)
    // alert('A name was submitted: ' + name + ' A age was submitted: ' + age + ' The location is: ' + location);
  }

    return (
      <React.Fragment>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
            Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
            
        </label>

        <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </label>

        
        <input type="submit" value="Submit" />
      </form>

      {hasSubmitted && ( 
        <div>
          <p>
            {name}
            <br/>
            {age}
            <br/>
            {location}
            <br/>
            Thank you for submitting your form
          </p>

          <h1>Thank you for submitting your form</h1>
          

        </div>

        )}


      </React.Fragment>
    );
}

ReactDOM.render(<LogForm />,document.getElementById('root'));


// import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import books from './books.json';

// const formatter = new Intl.NumberFormat('en-GB', {
// style: 'currency',
// currency: 'GBP'
// })
















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