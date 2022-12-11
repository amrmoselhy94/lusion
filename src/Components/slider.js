import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import white from './../images/logoOne.png';
import black from './../images/logoTwo.png'

class Slider extends Component {
    render(){
        return ( 
        <Container fluid style={{'backgroundColor':'tan'}}>
        <Carousel >
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src={white}
                alt="White"
              />
              <Carousel.Caption>
                <h1> </h1>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={black}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h1> </h1>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
        );
    }


}

export default Slider;
