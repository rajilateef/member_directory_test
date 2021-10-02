import React, { Component } from 'react';
import { Nav, Container, Row, Col, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import menu from '../icons/menu.png';
import filter from '../icons/􀘵 Filter.svg';
import search from '../icons/􀒒 Search.svg';
import Breadcumb from './breadcumb';
import Data from '../Data.json';
// class Listing extends React.Component {
//     render() { 
//         return(
//             <>

//               <Container style={{ margin: "0px !important", padding: '0px' }}>
//                 <Row>
//                   <Col xs={12} md={6}>
//                                {/* navbar content for Listing page */}

//                     <Navbar className="Wrap" sticky="top">

//                       <Nav style={{ margin: '45px 0px 13px 20px' }}>

//                       <Nav.Item className="size">
//                           <Nav.Link to="/home"> <img src={menu} /></Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item style={{ paddingRight: '20px', paddingLeft: '30px' }}>
//                           <Nav.Link to="" style={{ color: '#444444' }}>Members Directory</Nav.Link>
//                         </Nav.Item>
                       
//                         <Nav.Item className="size" style={{ marginLeft: '20px !important' }} >
//                           <Nav.Link to="" ><img src={filter} /></Nav.Link>

//                         </Nav.Item>
//                         <Nav.Item className="size" style={{ paddingLeft: '10px' }}>
//                           <Nav.Link style={{ width: '20px' }}><img src={search} /></Nav.Link>
//                         </Nav.Item>
//                       </Nav>
//                     </Navbar>
//                     <Breadcumb data={Data}/>



//                   </Col>
//                 </Row>
//               </Container>
                                
//             </>
           
//         ) 
//     }
// }
 
// export default Listing;



const profileListing = () => {
  return (
  
       <Container style={{ margin: "0px !important", padding: '0px' }}>
                <Row>
                  <Col xs={12} md={6}>
                               {/* navbar content for Listing page */}

                    <Navbar className="Wrap"  fixed='top' style={{ position:"sticky", top: '0'}}>

                      <Nav style={{ margin: '45px 0px 13px 20px' }}>

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
                          <Nav.Link style={{ width: '20px' }}><img src={search} /></Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Navbar>
                    <Breadcumb data={Data}/>



                  </Col>
                </Row>
              </Container>
  
  );
}

export default profileListing;
