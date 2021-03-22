import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Card, Button, CardTitle, CardText,CardLink, CardBody} from 'reactstrap';


function MenuCard({ id, name, description, price}) {
    
    return (

        <div>
        
        <Card body inverse color="warning">
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{description}</CardText>
          <CardBody>{price}</CardBody>
          {/* <CardLink to={`/show-item/${id}`} color='secondary' >Get Menu Details</CardLink> */}
          <a href={`/show-item/${id}`}>Get Menu Details</a>
        </Card>
 
      </div>
    )
}

export default MenuCard
