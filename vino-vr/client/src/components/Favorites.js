import React from "react";
import {Row, Col, Card, Container, ListGroup} from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import Modal from "react-bootstrap/Modal";
import '../styles/Favorites.css'



function Favorites() {
    
    return (
      
      <Container className='CardGroupBG'>
          <Row xs={1} md={3} lg={4} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                <Card className="favorite-card" style={{ margin:".5rem 0 .75rem" }}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Text>
                        {/* <ListGroup variant="flush">
                            <ListGroup.Item>Wine Name:</ListGroup.Item>
                            <ListGroup.Item>Country of Origin:</ListGroup.Item>
                            <ListGroup.Item>Year:</ListGroup.Item>
                            <ListGroup.Item>Description:</ListGroup.Item>
                            <ListGroup.Item> <button>Favorite</button></ListGroup.Item>
                        </ListGroup> */}
                        <ul>
                        <li>Veuve Clic:</li>
                        <li>Country of Origin:</li>
                        <li>Year:</li>
                        <li>Description:</li>
                        </ul>

                    </Card.Text>
                    <Card.Link>Add to Favorites</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
      </Container>
    )
};
export default Favorites;