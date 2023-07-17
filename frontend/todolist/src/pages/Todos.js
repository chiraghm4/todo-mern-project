import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TodoContainer from "../components/todoContainer";
import AddTodoForm from "../components/addTodoForm";


const Todos = () => {
  return (
    <div>
      <Row>
        <Col>
          <Container>
            <header className="text-center mt-2">
              <h2>Todo List</h2>
            </header>
            <TodoContainer />
          </Container>
        </Col>
        <Col>
          <Container
            style={{
              marginTop: "120px",
              width: "80%",
              border: "1px solid grey",
              padding: "18px",
              borderRadius: "10px",
            }}
          >
            <AddTodoForm />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Todos;