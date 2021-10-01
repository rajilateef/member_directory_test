import React, { Component } from 'react';
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import menu from '../icons/menu.png';
import filter from '../icons/􀘵 Filter.svg';
import search from '../icons/􀒒 Search.svg';
import Breadcumb from './breadcumb';
class Listing extends React.Component {
    render() { 
        return(
            <>

              <Container style={{ margin: "0px !important", padding: '0px' }}>
                <Row>
                  <Col xs={12} md={6}>
                               {/* navbar content for Listing page */}

                    <Navbar className="Wrap">

                      <Nav style={{ margin: '55px 0px 13px 20px' }}>

                      <Nav.Item className="">
                          <Nav.Link to="/home"> <img src={menu} /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ paddingRight: '20px', paddingLeft: '30px' }}>
                          <Nav.Link to="" style={{ color: '#444444' }}>Members Directory</Nav.Link>
                        </Nav.Item>
                       
                        <Nav.Item className="" style={{ marginLeft: '20px !important' }} >
                          <Nav.Link to="" ><img src={filter} /></Nav.Link>

                        </Nav.Item>
                        <Nav.Item className="" style={{ paddingLeft: '10px' }}>
                          <Nav.Link ><img src={search} /></Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar>
                    <Breadcumb/>
           
                  </Col>
                </Row>
              </Container>
                                
            </>
           
        ) 
    }
}
 
export default Listing;