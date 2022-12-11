import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsCartPlus} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import {Link} from 'react-router-dom';

// import { AiOutlineShoppingCart } from 'react-icons/fa';


class Naav extends Component { 
    render(){
        return ( <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' className='fs-4' style={{color:'aqua'}}>Home</Nav.Link>
              <Nav.Link as={Link} to='/shop' className='fs-4' style={{color:'aqua'}}>Shop</Nav.Link>
            </Nav>
            <Navbar.Brand href="#home" className='me-auto fs-2' style={{color:'aqua'}}>Lusion</Navbar.Brand>
  
            <Nav>
              <Nav.Link as={Link} to='/cart' className='position-relative' >
                <BsCartPlus className='fs-4' style={{color:'aqua'}}/>
                <Badge bg={this.props.cartProductsCount===0?'danger':'success'}  className='position-absolute top-0 start-100 translate-middle'>{this.props.cartproducts.length}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
    }
}

export default Naav;

