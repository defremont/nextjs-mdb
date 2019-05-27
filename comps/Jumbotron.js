import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Layout from "../comps/Layout";
import Cases from "../comps/Cases";
import Projects from "../comps/Projects";
import {
    MDBJumbotron,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBIcon
} from "mdbreact";

const layoutStyle = {
    height: "100vh", backgroundColor: "#222",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
const Jumbotron = () => (
    <MDBJumbotron className="z-depth-0" style={layoutStyle} >
        <MDBCol
            className="text-white text-left"
        >
            <MDBCardTitle className="h1-responsive pt-3 mb-5 mx-5 font-bold">
                Create your beautiful website with MDBootstrap
        </MDBCardTitle>
            <p className="mx-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                sit officia accusamus minus error nisi architecto nulla
                ipsum dignissimos. Odit sed qui, dolorum!
        </p>
            <MDBBtn outline color="white" className="mx-5 mb-5">
                <MDBIcon icon="clone" className="mr-2" /> View project
        </MDBBtn>
        </MDBCol>
    </MDBJumbotron>

);


export default Jumbotron;