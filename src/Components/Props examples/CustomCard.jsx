
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomRotatingLinesLoader from "../Loaders/rotatingLine loaders";
import CustomVortexLoader from '../Loaders/vortex loader';
import CustomToast from "../Toasts msg/toast msg"
import { useEffect, useState } from 'react';


function CustomRectangleCard({Name,price,source}) {

      const [loading,SetLoading]=useState(true);
      useEffect(()=>{
        setTimeout(()=>{
          SetLoading(false)
        },5000)
      },[]);

  return (


    <Card  style={{ width: '18rem',margin:15 }}>
      <Card.Img variant="top" src={source}  height={350}/>
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>
         Price : {price}
        </Card.Text>
        {loading && <><CustomRotatingLinesLoader height={70} width={70} visible={"true"}  />
        <CustomVortexLoader/></>}
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
      <CustomToast/>
    </Card>

  );
}

export default CustomRectangleCard;


