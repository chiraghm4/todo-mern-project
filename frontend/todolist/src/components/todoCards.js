import { React, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import "../styles/styles.css";

function TodoCard() {
  const [allTodos, setAllTodos] = useState([]);
  const [deleteC, setDeleteC] = useState(0)
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

  const handleDelete = async (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then(function(res) {
        setDeleteC(deleteC+1)
        console.log(res)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      {allTodos.map((item, index) => {
        return (
          <Card style={{ fontSize: "large", marginTop: "10px" }} key={index}>
            <Card.Body>
              <Card.Title>{item.todo}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.desc}
              </Card.Subtitle>

              <Button>Update</Button>
              <Button variant="danger" onClick={() => handleDelete(item._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default TodoCard;
