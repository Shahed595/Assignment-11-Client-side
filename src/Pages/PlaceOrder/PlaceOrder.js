import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./PlaceOrde.css";

const PlaceOrder = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://mighty-reaches-53782.herokuapp.com/services/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <Container style={{ display: "flex", marginTop: 20 }}>
      <div xs={12} sm={6}>
        <img style={{ width: 400, height: 250 }} src={service.image} alt="" />
      </div>
      <div
        style={{
          width: 400,
          height: 200,
          textAlign: "start",

          marginLeft: 100,
        }}
      >
        <h1>{service.name}</h1>
        <h4>Description :{service.description}</h4>
        <h3>Price :{service.price} Taka</h3>

        <Link to="/confirmOrder">
          <button className="button ">Buy Now</button>
        </Link>
      </div>
    </Container>
  );
};

export default PlaceOrder;
