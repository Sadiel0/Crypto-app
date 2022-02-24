import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Exchanges,
  HomePage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage /> HomePage
              </Route>
              <Route exact path="/exchanges">
                <Exchanges /> Exchanges
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies /> CryptoCurrencies
              </Route>
              <Route exact path="/cryptop/:coinId">
                <CryptoDetails /> CryptoDetails
              </Route>
              <Route exact path="/news">
                <News /> News
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CyrptoVerse <br />
            All Rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}
