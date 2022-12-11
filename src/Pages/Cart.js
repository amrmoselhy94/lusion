import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Cartitems from '../Components/Cartitems';

function Cart(props){

    let calcTotal =((e)=>{

      let total = 0;
      for(let i=0;i < e.length; i++)
      {
        total += e[i].price * e[i].quantity ; 
      }

      return total; 
    })

    return (
        
    
        <Container fluid style={{'backgroundColor':'tan'}}>
        <h1>Shopping Cart</h1>
        {console.log(props.cartpoducts)}
        {props.cartpoducts.length===0? <h2>Empty Cart</h2>: <></>}
        
        <Row xl={6} md={2} className='justify-content-center' >
            {props.cartpoducts.map((e)=>
                <Cartitems key={e.id} 
                            cartproduct={e} 
                            increaseproductquantity={props.increaseproductquantity}
                            decreaseproductquantity={props.decreaseproductquantity}/>

            )}
            
        </Row>
        <Row className = 'mt-3 border border-1 fs-3' style={{color:'red'}}>
            <Col>Total</Col>
            <Col >{calcTotal(props.cartpoducts)}</Col>
        </Row>
        
    </Container>
    )
}

export default Cart;

