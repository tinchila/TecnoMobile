import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Item = ({product, model, image, price, id}) => {
    return (
      <Link to={`/item/${id}`}>
      <Container fluid>
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
          <Card bg="light" text="dark" border="dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={model} />
            <Card.Body>
              <Card.Title>{product}</Card.Title>
              <Card.Text>{model}</Card.Text>
              <Card.Text>
                  $ {price}
              </Card.Text>
              <Button variant="secondary" to={`/item/${id}`}>Show Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </Link>
  )
}

export default Item

