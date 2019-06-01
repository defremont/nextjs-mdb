import Layout from "../comps/Layout";
import Cases from "../comps/Cases";
import Projects from "../comps/Projects";
import Jumbotron from "../comps/Jumbotron";
import Loader from "../comps/Loader";
import React from "react";
import Header from "../comps/Header";
import Footer from "../comps/Footer";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    console.log("const");
  }
  componentDidMount() {
    console.log("did mount");
    this.setState({ loaded: true });
  }

  /*
     nextjs params.query doesn't handle nested objects
     once it does, params.query could be used directly here, but also inside the constructor
     to initialize the searchState.
  */

  componentWillReceiveProps() {
    console.log("compwill");
    this.setState({});
  }

  render() {
    if (this.state.loaded) {
      console.log("if");
      return (
        <Layout>
          <Header />
          <Jumbotron />
          <Cases />
          <Projects />
          <style jsx global>{`
            body {
              background: #222;

              -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
              -moz-animation: fadein 2s; /* Firefox < 16 */
              -ms-animation: fadein 2s; /* Internet Explorer */
              -o-animation: fadein 2s; /* Opera < 12.1 */
              animation: fadein 2s;
            }

            @keyframes fadein {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #f1f1f1;
              font-family: "Raleway", sans-serif;
            }
            .nav-item a {
              font-family: "Lato", sans-serif !important;
            }
            button {
              font-family: "Raleway", sans-serif;
            }
            p,
            a {
              font-family: "Lato", sans-serif;
            }
          `}</style>

          <Footer />
        </Layout>
      );
    } else {
      console.log("else");
      return (
        <>
          <Loader />
          <style jsx global>{`
            body {
              background: #222;
            }
          `}</style>
        </>
      );
    }
  }
}
