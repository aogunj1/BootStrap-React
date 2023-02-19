
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        
     <Form>
      <Row>
        <Col md>
      <Form.Group controlId="formEmail">
        <Form.Label> Email Address </Form.Label>
        <Form.Control type = "email" placeholder = "Example.gmail.com" />
        <Form.Text className="text-muted">
          We wont Snitch!
        </Form.Text>
      </Form.Group>
      </Col>
      <Col md >
      <Form.Group controlId="formPassword">
        <Form.Label> Name </Form.Label>
        <Form.Control type = "email" placeholder = "Jane Doe" />
      </Form.Group>
      </Col>
      </Row>
      <Button type="submit"> Submit!</Button>
     </Form>
<Card className = "mb-3" style={{color: "#000"}}>
  <Card.Img src = "https://picsum.photos/200/75 " />
  <Card.Body>
<Card.Title>
 Image Loader
</Card.Title>
<Card.Text>
  
<Button type="submit"> Random Img Generator</Button>
</Card.Text>

  </Card.Body>
</Card>     
       </Container>
      </header>
    </div>
  );
}

export default App;
