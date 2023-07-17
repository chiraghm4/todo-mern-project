import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Container } from "react-bootstrap";
import axios from "axios";

function UpdateModal({ show, handleClose, todo_id }) {
  // console.log(todo_id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [oneTodo, setOneTodo] = useState({})
  // useEffect(() => {
  //   const todoInfo = async () => {
  //     const oneTodoInfo = axios.get(`http://localhost:8001/todos/${todo_id}`)
  //     setOneTodo(todoInfo)
  //   }
  //     todoInfo();
  // }, [])
  
  // console.log(oneTodo, 'holaa')

  const handleUpdateTodo = () => {
    axios
      .put(`http://localhost:8001/todos/${todo_id}`, {
        todo: title,
        desc: desc,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Panel!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're updating this todo in a modal!</Modal.Body>

        <Container className="">
          <Form>
            <Form.Group className="mb-3" controlId="updatedTodo">
              <Form.Label>Updated Todo Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type Here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </Form.Group>
          </Form>
        </Container>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
