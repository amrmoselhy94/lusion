import React, { Component } from 'react';
import Categories from '../Components/Categories';
import Slider from './../Components/slider';
import Bestselling from './../Components/Bestselling'


class Home extends Component {
render(){
    return (
    <>
        <Slider/>
        <Categories/>
        <Bestselling />
    </>
 )
}
   


}
export default Home

