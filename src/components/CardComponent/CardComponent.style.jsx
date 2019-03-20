import React from "react";
import {Flex,Box} from "@rebass/grid";
import styled,{css} from "styled-components";
export const Container = styled(Box)`
width:320px;
min-height:200px;
background:purple;
position:relative;

`;
export const ImageBox =styled.div`
width:245px;
height:50px;
background:black;
position:absolute;
top:307px;
opacity: 0.5;
background-size: contain;
background-repeat:no-repeat ;

`;

export const Para = styled.p`
margin-top:7px;
margin-left:72px;
color:white;
font-weight:600;
font-size:20px;
`;
