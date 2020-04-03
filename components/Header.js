import React, { Component } from "react";
import Link from "next/link";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const style = { height: 70 };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={style} src="/static/images/logo/logo.png" alt="" />
              Healthy Cafe
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleString()}
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item title">
                <Link href="/">Home</Link>
              </li>
              <li className="list-inline-item title">|</li>
              <li className="list-inline-item title">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
