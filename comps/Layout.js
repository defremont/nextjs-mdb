import React from "react";
import Header from "./Header";

const layoutStyle = {};
export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
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
    </div>
  );
}
