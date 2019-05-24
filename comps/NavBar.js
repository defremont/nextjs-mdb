import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import logoSVG from "../assets/img/logo.svg";
import Link from "next/link";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer
} from "mdbreact";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="black" dark transparent expand="md">
        <MDBNavbarBrand>
          <img id="logo" src={logoSVG} alt="Logo SVG" width="60" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link href="/">
                <a className="nav-link">Case Studies</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/register">
                <a className="nav-link">Experiments</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/register">
                <a className="nav-link">Contact</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/register">
                <a className="nav-link">Night</a>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Index;
