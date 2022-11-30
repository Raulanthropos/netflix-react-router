import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";

class CarouselOfMovies extends Component {
  
    state = {
    movies: [],
    isLoading: true,
  };

  fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=be0e715&s=${this.props.title}`
      );
      if (response.ok) {
        const moviesReadable = await response.json();
        this.setState({
          movies: moviesReadable,
          isLoading: false,
        });
      } else {
        console.log("Error! Danger! Run!");
        this.setState({
          ...this.state,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        ...this.state,
        isLoading: false,
      });

    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <>
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Carousel>
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex">
                  {this.state.movies.Search && this.state.movies.Search.map((movie) => ( //movies.Search needs to be truthy, in order for lines 64-73 to execute
                        <div key={movie.imdbID}>
                          <h6>{movie.Title}</h6>
                          <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="movie mt-3"
                            gap={2}
                          />
                        </div>
                      )
                    )}
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default CarouselOfMovies;