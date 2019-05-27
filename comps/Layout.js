import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default function Layout(props) {
  return (

    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">

            <Header />
            {props.children}
          </MDBCol>
        </MDBRow>
        <style jsx global>
          {`
          body {
            background: #222;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #f1f1f1;
          }
          .nav-item a {
            font-family: "Oswald", sans-serif !important;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          button {
            font-family: "Oswald", sans-serif;
          }
          p,
          a {
            font-family: "Droid Serif", serif;
          }
        `}
        </style>
      </MDBContainer>

      <Footer /></div>
  );
}
