import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TodoContainer from "../components/todoContainer";
import AddTodoForm from "../components/addTodoForm";


const Todos = () => {
  const username = sessionStorage.getItem('user_name')


  return (
    <div>
      <Row>
      <header className="text-center ">
              <h2>Welcome {username}</h2>
            </header>
        <Col>
          <Container>
            <h3 className="text-center mt-5">Your Tasks</h3>
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