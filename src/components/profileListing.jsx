import React, { Component } from 'react';
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import menu from '../icons/menu.png';
import filter from '../icons/􀘵 Filter.svg';
import search from '../icons/􀒒 Search.svg';
class Listing extends React.Component {
    render() { 
        return(
            <>

              <Container style={{ margin: "0px !important", padding: '0px' }}>
                <Row>
                  <Col xs={12} md={6}>
                               {/* navbar content for Listing page */}

                {/* <Nav className="container">
                  
                    <Nav.Item className="item">
                      <Nav.Link to="/home"> <img src={menu} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="item">
                      <Link to="">Member Directory</Link>
                    </Nav.Item>
                    <Nav.Item className="item">
                      <Nav.Link>img</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>img</Nav.Link>
                    </Nav.Item>
                  
                  </Nav> */}

  <Navbar >
  {/* <Navbar.Brand href=""><img src={menu}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Member Directory</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
     
                      </Nav> */}

                      <Nav className="Wrap">

                      <Nav.Item className="item">
                          <Nav.Link to="/home"> <img src={menu} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="item-text">
                          <Nav.Link to="" style={{ color: '#444444' }}>Members Directory</Nav.Link>
                        </Nav.Item>
                       
                        <Nav.Item className="item" >
                          <Nav.Link to="" style={{ marginRight: '-10px !important' }}><img src={filter} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="item" style={{ marginLeft: '-20px' }}>
                          <Nav.Link ><img src={search} /></Nav.Link>
                        </Nav.Item>
                      </Nav>
                      </Navbar>
           
                  </Col>
                </Row>
              </Container>
                                
            </>
           
        ) 
    }
}
 
export default Listing;