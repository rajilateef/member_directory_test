import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
class Breadcumb extends React.Component {

    render() { 
        return (

        <Navbar bg="light" variant="light" >
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
        )
    }
}
 
export default Breadcumb;