import React from "react";
import { Row, Col } from "react-bootstrap";
import { UserGetInForm } from "../components/userGetInForm";

const WelcomePage = () => {
  return (
    <div>
      <Row>
        <Col>
          <div className="d-flex justify-content-center"    >
            <h1>Welcome ToDo</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <UserGetInForm />
        </Col>
      </Row>
    </div>
  );
};

export default WelcomePage;
