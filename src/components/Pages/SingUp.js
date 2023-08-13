import React, { useState } from 'react';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';

function SingUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [passwordLengthValid, setPasswordLengthValid] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (email !== repeatEmail || password !== repeatPassword) {
      console.error('Email or password fields do not match.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/singin');
    } catch (error) {
      console.error('Error signing up:', error);
      setShowAlert(true);
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordLengthValid(value.length >= 8);
  };


  return (
    <Form onSubmit={handleSignUp}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <hr />
          <br />
          <Form.Label>
            <h2>Email</h2>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <Form.Label>
            <h2>Password</h2>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <hr />
          <br />
          <Form.Label>
            <h2>Repeat Email</h2>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={repeatEmail}
            onChange={(e) => setRepeatEmail(e.target.value)}
            required
          />
          <br />
          <Form.Label>
            <h2>Repeat Password</h2>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <br />
        <Form.Label><h2>Address</h2></Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label><h3>City</h3></Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label><h3>State</h3></Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Buenos Aires</option>
            <option>Catamarca</option>
            <option>Chaco</option>
            <option>Chubut</option>
            <option>Córdoba</option>
            <option>Corrientes</option>
            <option>Entre Ríos</option>
            <option>Formosa</option>
            <option>Jujuy</option>
            <option>La Pampa</option>
            <option>La Rioja</option>
            <option>Mendoza</option>
            <option>Misiones</option>
            <option>Neuquén</option>
            <option>Río Negro</option>
            <option>Salta</option>
            <option>San Juan</option>
            <option>San Luis</option>
            <option>Santa Cruz</option>
            <option>Santa Fe</option>
            <option>Santiago del Estero</option>
            <option>Tierra del Fuego</option>
            <option>Tucumán</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label><h3>Zip Code</h3></Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <hr />
      <br />
      <Button variant="secondary" type="submit">
        <h3>Register</h3>
      </Button>
      {!passwordLengthValid && (
        <Alert variant="danger" className="mt-2">
          Password debe contener al menos 8 caracteres.
        </Alert>
      )}
      {showAlert && (
        <Alert variant="danger" className="mt-3">
          Password incorrec. Please, try again.
        </Alert>
      )}
    </Form>
  );
}

export default SingUp;