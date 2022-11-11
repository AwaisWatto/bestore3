import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import logo from './bethemestore-slider-pic2.webp' 


function Slider2() {

    return (



        <Container style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
        <Row>
        
          <Col md={{ span: 7, offset: 3 }}>   
          <p className="display-4 text-center ">Vedeo</p>
          <p className="display-4 text-center ">The Blast Of Details </p>
          
        </Col>

       

        <Row className='mt-1'>
        <Col md={{ span: 7, offset: 3 }}>
        <img src={logo}  width={300} height={300} alt="BigCo Inc. logo"/>
        </Col>
        </Row>
    
        </Row>
      </Container>



);
}
    
    export default Slider2;