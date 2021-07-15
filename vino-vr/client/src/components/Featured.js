import Carousel from "./Carousel/Carousel"
import CarouselImage from './CarouselImage'
// import logo from './logo.svg';
// import './App.css';
import img2 from '../images/winecard2.png'
import img1 from '../images/winecard1.png'
import img3 from '../images/winecard3.png'
import img4 from '../images/winecard4.png'
// import img5 from '../images/img5.jpg'
// import FavBtn from './FavBtn'

const imageValues = [
    {
        altValue: 'img 1',
        imgSrc: img1,
        name: 'Opus One'
    },
    {
        altValue: 'img 2',
        imgSrc: img2,
        name: 'Chateau Castile-Lamont'
    },
    {
        altValue: 'img 3',
        imgSrc: img3,
        name: 'Cakebread'
    },

    {
        altValue: 'img 4',
        imgSrc: img1,
        name: 'Cakebread'
    },

    {
        altValue: 'img 5',
        imgSrc: img2,
        name: 'Cakebread'
    },
    {
        altValue: 'img 6',
        imgSrc: img3,
        name: 'Cakebread'  
    },
    // {
    //     altValue: 'img 7',
    //     imgSrc: img4,
    //     name: 'Cakebread'  
    // }

    

]

const carouselImages = imageValues.map(el => {
    return <CarouselImage altValue={el.altValue} imgSrc={el.imgSrc} name={el.name} />

})




function Featured() {
  return (
    // <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <div>
     
      <Carousel show ={3}>

          {carouselImages}
      
   

      </Carousel>
    </div>
  );
}

export default Featured;



// import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';
// import Modal from "react-bootstrap/Modal";
// import wine1 from '../images/winecard1.png';
// import BGgeneral from '../images/BGgeneral.png';
// import BGgeneral from '../images/BGgeneral.png';
// import '../styles/Featured.css'


// function Featured() {
//     const [show1, setShow1] = useState(false);
//     const [show2, setShow2] = useState(false);
//     const [show3, setShow3] = useState(false);
    
//     return (
//     <>
        
        
//          <Carousel>
//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={}
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h5>First slide label</h5>
//                     <p>fdgb rgregreg rg rg e geg Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     <Button variant="primary" onClick={() => setShow1(true)}>
//                         launch 1st modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={BGgeneral}
//                     alt="Second slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>Second slide label</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <Button variant="primary" onClick={() => setShow2(true)}>
//                         launch 2nd modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src={BGgeneral}
//                     alt="Third slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>Third slide label</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     <Button variant="primary" onClick={() => setShow3(true)}>
//                         launch 3rd modal
//                     </Button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
        
        
//         <Modal show={show1} onHide={() => setShow1(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal One 1 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is hte body of the 1st modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow1(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary">
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>  
//         </Modal>
        
//         <Modal show={show2} onHide={() => setShow2(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal 2 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is hte body of the 2nd modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow2(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary">
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>
//         </Modal>
        
//         <Modal show={show3} onHide={() => setShow3(false)}>
//             <Modal.Header closeButton>
//                 <Modal.Title>Modal 3 heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>This is the body of the 3rd modal</Modal.Body>
//             <Modal.Footer>
//                 <Button variant="secondary" onClick={() => setShow3(false)}>
//                     close
//                 </Button>
//                 <Button variant="secondary" >
//                     Add To favorites     
//                 </Button>
//             </Modal.Footer>
//         </Modal> 
//     </>
//      );
// }


// export default Featured;
    
    