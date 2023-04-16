import NavBar from "./components/navBar";
import TodoCard from './components/todoCards'
import TodoContainer from "./components/todoContainer";
import AddTodoForm from "./components/addTodoForm";
import {Container, Button, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div>
      <NavBar />
      <Row>
      <Col>
      <Container >
        <header className="text-center mt-2"><h2>Todo List</h2></header>
        <TodoContainer />
      </Container>
      </Col>
      <Col>
      <Container style={{marginTop: "120px" ,width: "80%", border: "1px solid grey", padding: "18px", borderRadius: "10px"}}>
<AddTodoForm/>
</Container>
      </Col>
      </Row>
    </div>
  );
}

export default App;
