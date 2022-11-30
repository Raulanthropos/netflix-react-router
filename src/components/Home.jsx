import { Container, Row, Col } from "react-bootstrap"
import TitleContainer from "./TitleContainer"
import CarouselOfMovies from "./CarouselOfMovies"

const Home = () => {

    return (
        <Container>
  <Row className="text-white">
    <Col><TitleContainer/></Col>
    <Col><CarouselOfMovies title="Home Alone"/></Col>
    <Col><CarouselOfMovies title="Lord of the Rings"/></Col>
    <Col><CarouselOfMovies title="Saw"/></Col>
  </Row>
</Container>
    )
}

export default Home