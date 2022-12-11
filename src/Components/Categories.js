import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import Container  from 'react-bootstrap/Container';
import cat1 from './../images/s1.jpg';
import cat2 from './../images/s2.jpg';
import cat3 from './../images/s3.jpg';
import cat4 from './../images/s4.jpg';


class Categories extends Component{

    render(){
        return (
            <Container fluid style={{'backgroundColor':'skyblue'}}>
            <Container className='mt-4' >
                <h1>Categories</h1>
                <Row>
                    <Col>
                        <img className="d-block w-100" src={cat1} alt="Clothing" />
                        <h2>Clothing</h2>
                        <h5>6 items</h5>
                    </Col>
                    <Col>
                        <img className="d-block w-100" src={cat2} alt="Bag Brands" />
                        <h2>Bag Brands</h2>
                        <h5>6 items</h5>
                    </Col>
                    
                    <Col>
                        <img className="d-block w-100" src={cat3} alt="Accessories" />
                        <h2>Accessories</h2>
                        <h5>6 items</h5>
                    </Col>
                    
                    <Col>
                        <img className="d-block w-100" src={cat4} alt="Shoes" />
                        <h2>Shoes</h2>
                        <h5>6 items</h5>
                    </Col>
                    
                </Row>
            </Container>
            </Container>
            )




    }







}

export default Categories;