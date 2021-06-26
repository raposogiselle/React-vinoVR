import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

function FeaturedCarouselModals() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    
    return (
    <>
        
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>fdgb rgregreg rg rg e geg Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button variant="primary" onClick={() => setShow1(true)}>
                        launch 1st modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button variant="primary" onClick={() => setShow2(true)}>
                        launch 2nd modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button variant="primary" onClick={() => setShow3(true)}>
                        launch 3rd modal
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
        <Modal show={show1} onHide={() => setShow1(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal One 1 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is hte body of the 1st modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow1(false)}>
                    close
                </Button>
                <Button variant="secondary">
                    Add To favorites     
                </Button>
            </Modal.Footer>  
        </Modal>
        
        <Modal show={show2} onHide={() => setShow2(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal 2 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is hte body of the 2nd modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow2(false)}>
                    close
                </Button>
                <Button variant="secondary">
                    Add To favorites     
                </Button>
            </Modal.Footer>
        </Modal>
        
        <Modal show={show3} onHide={() => setShow3(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal 3 heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is the body of the 3rd modal</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow3(false)}>
                    close
                </Button>
                <Button variant="secondary" >
                    Add To favorites     
                </Button>
            </Modal.Footer>
        </Modal>
    </>
     );
}


export default Featured;
    
    