import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ShopImg from './../images/Shop1.jpg';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Shopitems from './../Components/Shopitems'

function Shop(props) {

    return (
        <>
        <Container fluid className='position-relative'>
              <img  className="d-block w-100"  src={ShopImg} alt="Shop"/>
              <div className='position-absolute top-50 start-50'>
                <h1  style={{color:'skyblue'}}>Shop</h1>
                <Nav.Link className = 'fs-3' as={ Link } to='/' style={{color:'white'}}>Home/<span style={{color:'skyblue'}}>Shop</span></Nav.Link>
              </div>
              
        </Container>

        <Container fluid>
        <Container fluid className='mt-3 p-4' style={{'backgroundColor':'tan'}}>
            
            <Row xl={6} md={2} className='justify-content-center' >
                {props.products.map((e)=>
                <Shopitems key={e.id} product={e} addtocart={props.addtocart} />
                )}
            </Row>
        </Container>
        </Container>
        
        </>
    )
}

export default Shop;
