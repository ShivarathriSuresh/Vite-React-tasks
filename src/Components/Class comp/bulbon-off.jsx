
import { Card,Button } from "react-bootstrap";
import { Component } from "react";



    class CustomBulb extends Component {

      state={
          bulb:true
      }
  
      clickBulbOnHandler=()=>{
          this.setState({bulb:false});
      }
  
      clickBulbOffHandler=()=>{
          this.setState({bulb:true})
         
      }
  
      render(){
          return(
              <>
              <Card style={{ width: '18rem' ,margin:50}}>
        {this.state.bulb?<Card.Img variant="top" src="https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=" width={450} height={350} />:
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/light-bulb-black-background-17047477.jpg"   width={450} height={350} />}


        <Card.Body>


          
          <Button variant="primary" onClick={this.clickBulbOnHandler} style={{marginRight:10}}>Bulb ON</Button>
          <Button variant="primary" onClick={this.clickBulbOffHandler}>Bulb OFF</Button>
  
        </Card.Body>
      </Card>
              </>
          )
      }
  }
  export default CustomBulb;
 
