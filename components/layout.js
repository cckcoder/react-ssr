import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
  render() {
    const { children, title = "Healthy Cafe Blog" } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>

        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
