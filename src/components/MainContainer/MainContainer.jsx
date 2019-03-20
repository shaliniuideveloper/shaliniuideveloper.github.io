import React,{Fragment,Component} from "react";
import {Flex, Box} from "@rebass/grid";
import {CardComponent} from "../CardComponent";
import {Container} from "./MainContainer.style";
class MainContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            msgText : "Home and Away"
        }
    }
    componentWillMount(){
        console.log("Inside MainContainer willMount");
    
    }
    componentDidMount(){
        //Initial fetch from server to be done here
    
    }
    render(){
        return(
            <Fragment>
                    <Container>
                    <Flex flexDirection={'column'} flex={1} m={3}>
                        <CardComponent msgText={this.state.msgText}></CardComponent>
                    </Flex>
                    </Container>
                
            </Fragment>
        );
    }


}
export default MainContainer;