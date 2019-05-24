import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon
} from "mdbreact";

import Layout from "../comps/Layout";
import Cases from "../comps/Cases";
import Projects from "../comps/Projects";

const Index = () => (
  <div>
    <Layout>
      <MDBContainer fluid className="p-0">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol
                className="text-white text-center"
                style={{
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`
                }}
              >
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                    Create your beautiful website with MDBootstrap
                  </MDBCardTitle>
                  <p className="mx-5 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn outline color="white" className="mb-5">
                    <MDBIcon icon="clone" className="mr-2" /> View project
                  </MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Cases />
      <Projects />
    </Layout>
    <style jsx>{``}</style>
  </div>
);

export default Index;
