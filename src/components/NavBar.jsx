// import { Component } from "react"
import { Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { ListGroup, ListGroupItem, Alert } from "react-bootstrap";
import NetflixImage from "../assets/netflix_logo.png";
import Avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log("LOCATION PATHNAME", location.pathname);
  const navigate = useNavigate();

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark text-dark">
      <div className="container-fluid">
        <Alert.Link className="navbar-brand" href="#">
          <Image src={NetflixImage} width={48} height={32} id="logo" />
        </Alert.Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ListGroup className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
            <ListGroupItem className="nav-item">
              <Button className="nav-Link" onClick={() => navigate("/")}>
                Home
              </Button>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Button className="nav-Link" onClick={() => navigate("/TVShows")}>
                TV Shows
              </Button>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Button
                className="nav-Link"
                onClick={() => navigate("/MovieDetails")}
              >
                Movies
              </Button>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Button
                className="nav-Link"
                onClick={() => navigate("/NotFound")}
              >
                Recently Added
              </Button>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Button
                className="nav-Link"
                onClick={() => navigate("/SingleMovie")}
              >
                SingleMovie
              </Button>
            </ListGroupItem>
          </ListGroup>

          <ListGroup className="navbar-nav">
            <ListGroupItem className="nav-item">
              <Alert.Link
                className={
                  location.pathname === "/TVShows"
                    ? "text078"
                    : "nav-link active"
                }
                aria-current="page"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Alert.Link>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Alert.Link
                className="nav-Link"
                onClick={() => navigate("/NotFound")}
              >
                KIDS
              </Alert.Link>
            </ListGroupItem>
            <ListGroupItem className="nav-item">
              <Alert.Link className="nav-Link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Alert.Link>
            </ListGroupItem>

            <ListGroupItem className="nav-item">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image src={Avatar} width={38} height={32} id="avatar" />
                </button>
                {/* <ListGroup className="dropdown-menu dropdown-menu-dark">
                                    <ListGroupItem><Alert.Link className="dropdown-item" href="#/profile.html">
                                            <div className="d-flex align-items-center">
                                                <Image src={Avatar} width={48} height={32} id="avatar-small"/>
                                                Raul
                                            </div>
                                        </Alert.Link></ListGroupItem>
                                    <ListGroupItem><Alert.Link className="dropdown-item" href="#/profile.html">Manage Profiles</Alert.Link></ListGroupItem>
                                    <ListGroupItem><Alert.Link className="dropdown-item" href="#/accounts.html">Account</Alert.Link></ListGroupItem>
                                    <ListGroupItem><Alert.Link className="dropdown-item" href="#">Help Center</Alert.Link></ListGroupItem>
                                    <ListGroupItem>
                                        <hr className="dropdown-divider"/>
                                    </ListGroupItem>
                                    <ListGroupItem><Alert.Link className="dropdown-item" href="#">Signout Netflix</Alert.Link></ListGroupItem>
                                </ListGroup> */}
              </div>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
