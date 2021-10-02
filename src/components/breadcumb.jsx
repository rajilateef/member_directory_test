import React, { Component } from 'react';
import { Navbar, Nav, Container, ListGroup, Card, Row, Col } from 'react-bootstrap';
import '../App.css';
import image from '../icons/image.png';
const Breadcumb = ({data}) => {
    return (
        <>
        <Navbar bg="light" variant="light" style={{ width:'375' }} >
            <Container>
           
            <Nav className="me-auto" className="bread">
            <Nav.Link href="">All</Nav.Link>
            <Nav.Link href="">Director</Nav.Link>
            <Nav.Link href="">Co-Founder</Nav.Link>
            <Nav.Link href="">CEO</Nav.Link>
            <Nav.Link href="">CIO</Nav.Link>
            <Nav.Link href="">CFO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

            <div style={{ height: '30px', width: '100vw' }}>

            </div>

            {data.map((value, key) =>{ return (
                <div key={key} style={{ backgroundColor: "white", width:'100%'}}>

                   <Container style={{ padding: '0px', marginRight: '20px', marginLeft: '20px', width: '100vw'}}>
            <Row style={{  backgroundColor: 'white', boxShadow: '0px 0px 1px black ', width: '100vw', padding: '0px 20px', left:'0'}} >
                
                <Col xs={4}>
                    
                    
                    <Card.Body>
                    <Card.Img src={image} />
                    </Card.Body>
                    
                </Col>
                <Col xs={8}>
                <Card.Body style={{ width: '100%' }}>
                        <Card.Title>{value.name}</Card.Title>
                        <Card.Text style={{ fontSize: '12px' }}>
                        {value.description}
                        </Card.Text>
                    </Card.Body>
                </Col>

            </Row>
                   </Container>
                </div>
            )})}
            
     
        </>
    );
}

export default Breadcumb;
