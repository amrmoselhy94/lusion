import React from 'react';
import {Button, Col} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';



function Cartitems(props){
return (
    <Col className='m-2 p-2 border border-1 me-2 rounded' style={{backgroundColor:'white'}}>
        <img className="d-block w-100" src={require( `./../images/${props.cartproduct.image}` )} alt="Product " />
        <h5>{props.cartproduct.name}</h5>
        <p style={{color:'red'}}> {props.cartproduct.price} LE</p>
        <Stack direction="horizontal" className='px-4 justify-content-center' gap={3}>
            <Button variant='danger' onClick={()=>props.decreaseproductquantity(props.cartproduct)}>-</Button>
            <p style={{color:'green'}} className='fs-5 pt-2'> {props.cartproduct.quantity}</p>
            <Button variant='success' onClick={()=>
                {props.increaseproductquantity(props.cartproduct);}}>+</Button>
            
        </Stack>
    </Col>
    )

}

export default Cartitems;

