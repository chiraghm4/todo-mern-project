import NavBar from "./components/navBar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import TodoCard from "./components/todoCards";
import TodoContainer from "./components/todoContainer";
import AddTodoForm from "./components/addTodoForm";
import { LoginPage } from "./components/userGetInForm";
import WelcomePage from "./pages/Welcome";
import Todos from "./pages/Todos";


function App() {
  const userId = sessionStorage.getItem('user_id');


  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path={userId!==null?`/todos`:`/`} element={userId!==null?<Todos /> : <WelcomePage />} />  */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      {/* <NavBar />

      {isLoggedIn ? (
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
      ) : (
        <LoginPage />
      )} */}
    </div>
  );
}

export default App;
