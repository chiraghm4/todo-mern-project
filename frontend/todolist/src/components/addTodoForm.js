import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    axios.post('http://localhost:8001/todos', {
        todo: title,
        desc: desc
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form style={{ fontSize: "larger" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="todoTitle">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="todoDesc">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </Form.Group>
      <Button type="submit" variant="success" size="lg">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodoForm;
