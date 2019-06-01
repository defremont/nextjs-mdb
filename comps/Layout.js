import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default function Layout(props) {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">{props.children}</MDBCol>
        </MDBRow>
        <style jsx>{``}</style>
      </MDBContainer>
    </div>
  );
}
