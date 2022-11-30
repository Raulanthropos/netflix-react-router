import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row className="flex-column">
        <Col>
          <h1 className="text-white">This path is not valid!</h1>
        </Col>
        <Col>
          <img
            src="https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="Sad kitty"
          />
        </Col>
        <Col>
          <Button variant="danger" className="mt-3" onClick={() => navigate("/Home")}>
            Go back to the Home page...
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
