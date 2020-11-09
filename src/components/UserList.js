import React, { Component } from "react";
import "../App.css";

export default class UserList extends Component {
  state = {
    data: [],
  };
  componentDidMount = async () => {
    let totalData = JSON.parse(localStorage.getItem("userData"));
    await this.setState({
      data: totalData,
    });
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <h1 className="registered">Registered Users List:</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date</th>
            </tr>
            {this.state.data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
