import React, { useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Naav from './Components/Naav';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import { Routes, Route } from "react-router-dom";


function App() {
  const  [Products]= useState([
              {id:1, name:'Hood', quantity:20, price:200,image:'shopC1.jpg' },
              {id:2, name:'Shirt', quantity:5, price:150,image:'shopC2.jpg' },
              {id:3, name:'Polo', quantity:25, price:120,image:'shopC3.jpg' },
              {id:4, name:'T-Shirt', quantity:9, price:110,image:'shopC4.jpg' },
              {id:5, name:'t-Shirt 1', quantity:10, price:100,image:'shopC5.jpg' },
              {id:6, name:'T-shirt 2', quantity:13, price:205,image:'shopC6.jpg' },
              {id:7, name:'Jeans', quantity:10, price:210,image:'shopC7.jpg' },
              {id:8, name:'Jeans 1', quantity:18, price:310,image:'shopC8.jpg' },
            
            ]);
  

  // products in shopping cart
  let [cartProducts, setcartProducts] = useState([ {id:7, name:'Jeans', quantity:2, price:210,image:'shopC7.jpg' } ]);
  
  // useEffect(()=>{},[cartProducts]);
  //add product to shopping cart
  const addToCart= (product)=>{
   
    let found=false; 

    //if the product exists in the cart, add its quantity
    cartProducts.map((e)=>{
      if(e.id === product.id)
      {
        e.quantity++;
        found=true; 
        return e;
      }
      return e;
    })
     
    if(found) // the item already exists in the shopping cart
     {
      setcartProducts([...cartProducts]);


      return;  
     }

     // the item is not in the shopping cart, so will add it:
    
    // clone product 
     let clone = structuredClone(product);
     clone.quantity = 1; // product.quantity=1; 
     //console.log('prod', product)
    cartProducts.push(clone);
    //console.log('cart', cartProducts);
    setcartProducts([...cartProducts]);
  }

  //Increase the quantity of an item in the cart 
  const increaseProductQuantity=(product)=>{

    console.log(product);

    cartProducts.map((e)=>{
      if(e.id === product.id)
      {
        e.quantity++;
      }
      return e;
    })
    setcartProducts([...cartProducts]);
        
  }

  //Decrease the quantity of an item in the cart
  const decreaseProductQuantity=(product)=>{

    // console.log(product);
    let remove = false;

    cartProducts.map((e)=>{
      if(e.id === product.id && e.quantity>0)
      {
        e.quantity--;
      }
      
      if (e.quantity===0) remove = true;

      return e;
    })


    //if the item quantity becomes zero then remove the item from the cart 
    //    products = products.filter(p=> p.id !== id);
    if (remove)
    {
      cartProducts = cartProducts.filter( e=> e.id!== product.id);
    }

    setcartProducts([...cartProducts]);

  }

  return (
    <div className="App" >
          <Naav cartproducts={cartProducts} />
          
   
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/shop' element={<Shop products={Products} addtocart={addToCart} cartproducts={cartProducts} />}  ></Route>
          <Route path='/cart' element={
                            <Cart cartpoducts={cartProducts}  
                            increaseproductquantity={increaseProductQuantity}
                            decreaseproductquantity={decreaseProductQuantity}/>

                            } >
          </Route>

          
        </Routes>   
     </div>
  );
}

export default App;
