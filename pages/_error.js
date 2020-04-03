import React, { Component } from "react";
import Layout from "../components/layout";

class Error extends Component {
  static getInitialProps({ res, error }) {
    const statusCode = res ? res.statusCode : error ? error.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <div className="text-center">
            <h3>
              {this.props.statusCode ?
                  'An error ' + this.props.statusCode + ' occured on server' :
                  'An error occured on client'
              }
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Error;
