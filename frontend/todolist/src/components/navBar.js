import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // useEffect(() => {
  //   const searchTodo = async () => {
  //     const res = await axios.get(`http://localhost:8001/todos/search/${keyword}`)
  //     console.log(res, 'result')
  //   }
  //   searchTodo()
  // }, [keyword])

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const res = await axios.get(`http://localhost:8001/todos/search/${keyword}`)
      console.log(res.data)
      dispatch(Object.assign({}, res.data));
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    sessionStorage.clear()
    navigate('/')
  }


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ToDoist</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search Todo"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button type='submit' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;