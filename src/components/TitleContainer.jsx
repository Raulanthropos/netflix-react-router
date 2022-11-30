import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class TitleContainer extends Component {
    render() {
        return(
            <Container fluid>
  <Row className="w-50 mb-5 row-row">
    <Col className="col-md-4 px-0">TV Shows</Col>
    <Col className="btn btn-outline-light dropdown-toggle genre-button col-md-3 px-0">Genres</Col>
  </Row>
</Container>
        )
    }
}

export default TitleContainer;