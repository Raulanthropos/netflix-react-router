import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleMovie = () => {
    const navigate = useNavigate();
    return (
        <><h1>This is a single movie!</h1>
            <Button variant="warning" onClick={() => navigate('/MovieDetails')}>See details</Button>
        </>
    )
}

export default SingleMovie;