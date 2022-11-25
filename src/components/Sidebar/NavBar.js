import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { VscMail } from "react-icons/vsc";
import { FaBell } from "react-icons/fa";
import "./Navbar.css";
const NavBar = () => {

  function LogOut() {
    localStorage.clear();

    // toast.success("LogOut Succesfully", {
      // position: toast.POSITION.TOP_CENTER,
    // });
    // navigate("/");
  }
  return (
    <div>
         <nav className="main-div navbar-static-top">
        <div className="container-fluid topbarLeft">
          {/* <div className="bars" style={{ cursor: "pointer", color: "white" }}> */}
            {/* <FaBars onClick={toggle} /> */}
          {/* </div> */}
          <div className="logos">
            <img
              src={""}
              alt=""
              style={{ width: "140px", marginLeft: "135px" }}
            />
          </div>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            {/* <Search className="searchIcon" /> */}
            <input placeholder="Search...." className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <VscMail color="white" />
            </div>
            <div className="topbarIconItem">
              <FaBell color="white" />
            </div>
            {/* <div className="topbarIconItem">
              <img
                src={`http://localhost:4001/${userimage}`}
                alt=""
                className="topbarImg"
              />
            </div> */}
            <Nav>
              {/* title={user.data.userdetails.name} */}
              <NavDropdown id="nav-dropdown"  style={{ fontSize: "20px" }}>
                <NavDropdown.Item onClick={""}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={LogOut}>LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
