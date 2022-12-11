import React from 'react';
import {Col} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import {BsCartPlus} from 'react-icons/bs'


function Shopitems(props){
    // let imagePath = './../images/'+props.product.image;

    return(
        <Col className='m-2 p-2 border border-1 me-2 rounded' style={{backgroundColor:'white'}}>
        <img className="d-block w-100" src={require( `./../images/${props.product.image}` )} alt="Product " />
        <h5>{props.product.name}</h5>
        <p style={{color:'red'}}> {props.product.price} LE</p>
        <Stack direction="horizontal" className='px-2' gap={3} >
            <p style={{color:'green'}}>Available: {props.product.quantity}</p>
            <button className='ms-auto' style={{border:'none'}}  
            onClick={()=>{
                    props.addtocart(props.product);
                    }}
            >
     <BsCartPlus className='fs-4' style={{color:'blue'}} /> </button>

        </Stack>
    </Col>
    )
};

export default  Shopitems;