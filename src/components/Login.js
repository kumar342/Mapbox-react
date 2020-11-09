import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    isLogin: false,
    userDataList: [],
  };

  componentDidMount = async () => {
    let list = JSON.parse(localStorage.getItem("userData"));
    await this.setState({
      userDataList: list,
    });
    localStorage.removeItem("userSingleData");
  };

  userLogin = async (e) => {
    e.preventDefault();
    const { userDataList, email, password } = this.state;
    const data = { email };
    const found = userDataList.findIndex(
      (item) => item.email === email && item.password === password
    );
    if (found === -1) {
      return alert("Please enter valid credentials");
    } else {
      localStorage.setItem("userSingleData", JSON.stringify(data));
      this.setState({
        isLogin: !this.state.isLogin,
      });
    }
  };

  render() {
    if (this.state.isLogin) {
      alert("Login is Successful");
      return <Redirect to="/maps" />;
    }

    return (
      <div className="container">
        <div>
          <h3 className="register"> Login Page</h3>
          <form onSubmit={this.onSubmit}>
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

            <button
              onClick={this.userLogin}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Login
            </button>
            <br />
            <h5>
              No account?&nbsp;&nbsp;
              <Link to="/register">Please Register</Link>
            </h5>
          </form>
        </div>
      </div>
    );
  }
}
