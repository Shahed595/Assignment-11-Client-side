import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../../images/logo/logo.jpg";

const Footer = () => {
  return (
    <Row
      style={{
        backgroundColor: "black",
        margin: "auto",
        display: "flex",
      }}
      xs={1}
      md={2}
    >
      <Col xs={12} md={5} style={{ color: "white" }}>
        <img
          style={{
            marginTop: 20,
            width: 150,
            marginRight: 80,
            borderRadius: 100,
          }}
          src={logo}
          alt=""
        />

        <h4 style={{ marginTop: 60, color: "#404561 " }}>
          Copyright © 2021 Developer Afjol ahmed
        </h4>
      </Col>
      <Col
        xs={12}
        md={6}
        style={{
          color: "white",

          marginTop: 20,
        }}
      >
        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <div style={{ textAlign: "left", lineHeight: 12 }}>
            <h6> Get help</h6>
            <h6> Read Our Blog</h6>
            <h6> Sign Up To Access Services</h6>
            <h6> Add Your Feedback</h6>
          </div>
          <div style={{ marginRight: 80, textAlign: "left" }}>
            <h6> About online Services</h6>
            <h6> Read FAQs</h6>
            <h6>View all Cities</h6>
            <h6> Clinic Near Me</h6>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 60,
          }}
        >
          <p>Privacy policy</p>
          <p>Tearms of use</p>
          <p>Ppricing</p>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
