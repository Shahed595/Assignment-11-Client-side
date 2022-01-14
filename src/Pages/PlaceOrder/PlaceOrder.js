import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
    // <div className="d-flex" xs={1}>
    //   <div>
    //     <img style={{ width: 400, height: 250 }}  alt="" />
    //   </div>

    //   <div
    //     style={{
    //       width: 400,
    //       height: 200,
    //       textAlign: "start",

    //       marginLeft: 100,
    //     }}
    //   >
    //     <h1>{service.name}</h1>
    //     <h4>Description :{service.description}</h4>
    //     <h3>Price :{service.price} Taka</h3>

    //     <Link to="/confirmOrder">
    //       <button className="button ">Buy Now</button>
    //     </Link>
    //   </div>
    // </div>
    <Row
      xs={1}
      md={2}
      className="g-4"
      style={{ margin: "auto", justifyContent: "center" }}
    >
      <Col style={{ width: 450 }}>
        <Card>
          <Card.Img variant="top" src={service.image} />
        </Card>
      </Col>
      <Col style={{ width: 350 }}>
        <Card>
          <Card.Body style={{ textAlign: "start" }}>
            <Card.Title
              style={{ fontSize: 35, fontWeight: 700, color: "#C0392B " }}
            >
              {service.name}
            </Card.Title>
            <Card.Text
              style={{ fontSize: 20, fontWeight: 700, color: "black" }}
            >
              Description : {service.description}
            </Card.Text>
            <Card.Text
              style={{ fontSize: 30, fontWeight: 700, color: "#EA5F14" }}
            >
              Price :{service.price}
            </Card.Text>
            <Link to="/confirmOrder">
              <button className="button ">Buy Now</button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PlaceOrder;
