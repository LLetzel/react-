
import Menu from "./Menu";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Contato() {
  return (
    <div >
      <Menu />
    <Form id="form">
      <h1>Contato</h1>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email: </Form.Label> 
        <Form.Control type="email" placeholder="name@example.com" className="center"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Telefone </Form.Label> 
        <Form.Control type="telefone" placeholder="Seu número" className="center"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentários:</Form.Label> 
        <Form.Control placeholder="Deixe seu comentário aqui" as="textarea" rows={3} />
      </Form.Group>
      
      <button>Enviar</button>
    </Form>
  
    </div>
  )}

export default Contato;