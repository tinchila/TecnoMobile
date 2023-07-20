import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Item = ({item}) => {
    return (
      <Link to={"/item/" + item.id}>
    <Col lg={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} alt={item.product} />
      <Card.Body>
        <Card.Title>{item.product}</Card.Title>
        <Card.Title>{item.model}</Card.Title>
        <Card.Text>
            ${item.price}
        </Card.Text>
        <Button variant="secondary">Show Details</Button>
      </Card.Body>
    </Card>
    </Col>
    </Link>
  )
}

export default Item

