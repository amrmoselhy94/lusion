import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import Container  from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

import best1 from './../images/t1.jpg';
import best2 from './../images/t2.jpg';
import best3 from './../images/t3.jpg';
import best4 from './../images/t4.jpg';
import {Link} from 'react-router-dom'

class Bestselling extends Component{
    render(){
        return (
            <Container fluid style={{backgroundColor:'lavender'}}>
            <Container className='p-3'>
                <h1 className='mt-4'>Best Selling</h1>
                <Row xl={5} md={2}>
                    <Col className='border border-1 me-2 rounded' style={{backgroundColor:'white'}}>
                        <img className="d-block w-100" src={best1} alt="Best Selling 1" />
                        <h5>Quilted Jillet with Hood</h5>
                        <p>$ 200</p>
                        <Button as={Link} to='/shop'>Shop Now</Button>
                    </Col>
                    
                    <Col className='border border-1 me-2 rounded'>
                        <img className="d-block w-100" src={best2} alt="Best Selling 2" />
                        <h5>Quilted Jillet with Hood</h5>
                        <p>$ 200</p>
                        <Button>Shop Now</Button>
                    </Col>
                    
                    <Col className='border border-1 me-2 rounded'>
                        <img className="d-block w-100" src={best3} alt="Best Selling 3" />
                        <h5>Quilted Jillet with Hood</h5>
                        <p>$ 200</p>
                        <Button>Shop Now</Button>
                    </Col>
                    
                    <Col className='border border-1 me-2 rounded'>
                        <img className="d-block w-100" src={best4} alt="Best Selling 4" />
                        <h5>Quilted Jillet with Hood</h5>
                        <p>$ 200</p>
                        <Button>Shop Now</Button>
                    </Col>
                    
                    <Col xl={2} md='auto' className='border border-1 position-relative justify-cotent-center' style={{overflow:'hidden'}}>
                        
                            <div className='position-absolute top-50 start-50 border border-1' style={{writingMode:'vertical-lr'}}>All Products</div>
                        </Col>
                    


                </Row>
            </Container>
          </Container>

        )

    }
}

export default Bestselling;
