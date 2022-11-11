import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {FaLaptop } from 'react-icons/fa';
import {FaMobileAlt } from 'react-icons/fa';
import {CgAppleWatch } from 'react-icons/cg';
import {FiMonitor } from 'react-icons/fi';
import {IoGameControllerOutline } from 'react-icons/io5';
import {BiDotsHorizontal} from 'react-icons/bi';
import './Categories.css';



function Categories() {
  return (
    <Container className="p-3"  style={{height: 400, }}>
        
      <Row>
      <Col>
      <div className=" p-5 display-4 text-center ">Browse <span class="text-primary"> 60000+ </span> Products
      </div>
      </Col>
      </Row>


<Row>
    
      <Col>
      <Card className="text-center ">
        <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < FaLaptop size={60}/>
          <Card.Text className="mt-5 fw-bold">
            Note Books
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>


      <Col>
      <Card className="text-center">
      <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < FaMobileAlt size={60}/>
          <Card.Text className="mt-5 fw-bold">
          SmartPhones
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      
      <Col>
      <Card className="text-center">
      <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < CgAppleWatch size={60}/>
          <Card.Text className="mt-5 fw-bold">
            SmartWatches
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card className="text-center">
      <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < FiMonitor size={60}/>
          <Card.Text className="mt-5 fw-bold">
           TV/Audio
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    
    
      <Col>
      <Card className="text-center">
      <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < IoGameControllerOutline size={60}/>
          <Card.Text className="mt-5 fw-bold">
           Gaming
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

      <Col>
      <Card className="text-center">
      <Card.Body style={{backgroundColor: "#F8F9F9 "}}>
       < BiDotsHorizontal size={60}/>
          <Card.Text className="mt-5 fw-bold">
            View All
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

    </Row>
    </Container>
  );
}

export default Categories;