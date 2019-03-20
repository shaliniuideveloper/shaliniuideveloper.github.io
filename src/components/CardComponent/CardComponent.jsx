import React,{Fragment} from "react";
import PropTypes from "prop-types";
import {Flex, Box} from "@rebass/grid";
import {Container,ImageBox,Para} from "./CardComponent.style";
import Tile from "../../img/tile.jpg"; 
import Logo from "../../img/logo.png"; 
const CardComponent = ({msgText})=>(
    
        <Fragment>
        <Container width={[1, 1/2, 1/4]}>
        <Flex w={1} flexDirection="column" p={1}>
        <img src={Tile}></img>
        <Flex w={1} flexDirection="row">
        <ImageBox style={{backgroundImage:"url(" + Logo + ")"}}>
        <Para>{msgText}</Para>
        </ImageBox>
            
        </Flex>
        </Flex>
        
        
            
            
            
            
            
            
        
        </Container>
        </Fragment>
    
);
CardComponent.propTypes ={
    msgText :PropTypes.string.isRequired
};
CardComponent.defaultProps ={
    msgText:""
};
export default CardComponent;