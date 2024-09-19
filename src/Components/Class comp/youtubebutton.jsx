import { Component } from "react";
import CustomFrontPage from "../React Bootstrap/Bootstrap exam";
import "../../App.css";
import CustomRotatingLinesLoader from "../Loaders/rotatingLine loaders";

class YoutubeButton extends Component{

    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }
 
clickHandler=()=>{
    this.setState({
        isSubscribe:!this.state.isSubscribe
    })
}

    render(){

        return(
            <div  className="Parent-div">
                
            <button onClick={this.clickHandler}  className="button">{this.state.isSubscribe?this.state.text2:this.state.text1 }</button>

            {   
                this.state.isSubscribe?<div><CustomFrontPage/></div>:<div><h1>Please Subscribe and access my content</h1></div>
            }

            </div>
        )
    }
}

export default YoutubeButton;