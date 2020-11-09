import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Header extends Component {
  state = {
    data: "",
    user: true,
  };
  componentDidMount = async () => {
    console.log(JSON.parse(localStorage.getItem("userSingleData")));
    let data = JSON.parse(localStorage.getItem("userSingleData"));
    await this.setState({
      data: data,
    });
  };

  logOut = () => {
    this.setState({
      user: null,
    });
  };
  render() {
    if (!this.state.user) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark "
          style={{ backgroundColor: "#0074D9" }}
        >
          <i className="fa fa-user-o" style={{ color: "white" }}></i>&nbsp;
          <a className="navbar-brand" href="/#">
            &nbsp;Welcome {this.state.data.email} <br />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item mr-5">
                <button type="button" className="btn btn-success">
                  <Link to="/usersList" style={{ color: "white" }}>
                    Users List
                  </Link>
                </button>
              </li>

              <li className="nav-item active">
                <button
                  onClick={this.logOut}
                  type="button"
                  className="btn btn-info"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
