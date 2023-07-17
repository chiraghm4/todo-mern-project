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
        <Route path="/" element={<WelcomePage />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
