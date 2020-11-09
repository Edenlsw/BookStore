import React, { Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import App from '../App';
import "../components/Book.css"





const Book = (props) => {
    let {
        id,
         volumeInfo: { title, authors, description,  imageLinks: {thumbnail, smallThumbnail}},
        saleInfo: {listPrice}
        // remove amount line
    } = props.book;

  
    
    return (
        
        <div className="books">
            <div className="image-text">
                
            {/* <h2 className="book-title">{title}</h2> */}
                <Container fluid="sm">
                    
                    <Row className="book-title-row">
                        <h2 className="book-title">{title}</h2>
                    </Row>
                    <Row className="authors-row">
                        <p className="authors"> by {authors ? authors.join(', '): 'No Authors'}</p>
                    </Row>                 
                    <Row>
                        <Col className="non-text" sm={4}>

                            <Row>
                                <img className = "image" src={smallThumbnail || thumbnail}/>
                                
                            </Row>
                            <Row>

                                <p className="price"> £ {listPrice && listPrice.amount}</p>
                            </Row>

                            <Row >
                                {/* <p className="price"> £ {listPrice && listPrice.amount}</p> */}
                                {props.addBook && (
                                            <button className="addbtn"
                                        onClick={() => props.addBook(title, id)} > Add </button>
                                            
                                        )}
                                        {props.removeBook && (
                                            <button className="removebtn" 
                                            onClick={() => props.removeBook(id)}>Remove
                                            </button>
                                        )}
                                
                            </Row>

                        </Col>

            
                        <Col className="single-description" sm={8}>
                            <p className="description">{description}</p>
                        </Col>
            
                        
                    </Row>

                    </Container>
     
            </div>
            
            
        </div>
    );
}



    

Book.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string, 
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            authors: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            imageLinks: PropTypes.shape({
                smallThumbnail: PropTypes.string
            })
        }),
        
        saleInfo: PropTypes.shape({
            listPrice: PropTypes.shape({
                amount: PropTypes.number.isRequired
            })
        })

        
    })

}


export default Book;