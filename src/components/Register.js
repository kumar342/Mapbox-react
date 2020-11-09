import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    date: new Date(),
    phone: "",
    data: [],
  };

  componentDidMount = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    this.setState(
      {
        data: userData,
      },
      () => {
        console.log(this.state.data);
      }
    );
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.state.data && this.state.data.length > 0) {
      const userData = JSON.stringify(this.state.data);
      localStorage.setItem("userData", userData);
    }
  };

  /**
   *
   * @param {*} e - event
   */

  componentWillUpdate = () => {
    localStorage.setItem("user", JSON.stringify(this.state));
  };

  onSubmit = async (e) => {
    e.preventDefault();
    let userDataArray = [];
    const { name, email, phone, password, date, data } = this.state;
    const userData = { name, email, phone, password, date };
    userDataArray.push(userData);

    let totalData = [...userDataArray, ...data];
    console.log(totalData);

    await this.setState({
      data: totalData,
      email: "",
      name: "",
      password: "",
      phone: "",
    });
    alert("Successfully Registered, Please Login");
  };

  render() {
    return (
      <div className="container">
        <h3 className="register"> Register Page</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              className="form-control"
              value={this.state.phone}
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
          <br />
          <h5>
            Already have an account?&nbsp;&nbsp;<Link to="/">Login</Link>
          </h5>
        </form>
      </div>
    );
  }
}
