import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Service = ({ service }) => {
  const { _id, name, image, description, price } = service;
  return (
    <div xs={12} sm={6} md={4}>
      <Col>
        <Card style={{ borderRadius: 20 }}>
          <Card.Img className="image" variant="top" src={image} />
          <Card.Body>
            <Card.Title style={{ color: "#900C3F", fontWeight: 700 }}>
              {name}
            </Card.Title>
            <Card.Text style={{ color: "#2C3E50 ", fontWeight: 700 }}>
              {description}
            </Card.Text>
            <Card.Text style={{ color: "#C70039", fontWeight: 700 }}>
              Price: {price}
            </Card.Text>
            <Link to={`/placeorder/${_id}`}>
              <button className="button" style={{ width: "100%" }}>
                Order Now
              </button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
