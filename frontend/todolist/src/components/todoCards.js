import { React, useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios";
import "../styles/styles.css";
import UpdateModal from "./updateModal";

function TodoCard() {
  const [allTodos, setAllTodos] = useState([]);
  const [deleteC, setDeleteC] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/todos");
        setAllTodos(data);
        console.log(allTodos);
      } catch (err) {
        console.log(err);
      }
    };
    getAllTodos();
  }, [deleteC]);

  const handleShow = () => {
    setShowModal(true);
  };
  
  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(function (res) {
        setDeleteC(deleteC + 1);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      {allTodos
        .slice(0)
        .reverse()
        .map((item, index) => {
          return (
            <Card style={{ fontSize: "large", marginTop: "10px" }} key={index}>
              <Card.Body>
                <Card.Title>{item.todo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.desc}
                </Card.Subtitle>
                <Button onClick={handleShow}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
                <UpdateModal show={showModal} handleClose={handleClose} todo_id={item._id} />
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}

export default TodoCard;
