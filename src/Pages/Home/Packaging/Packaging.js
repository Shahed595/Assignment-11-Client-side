import React from "react";
import { Carousel } from "react-bootstrap";
import carosol1 from "../../../images/tea-1.jpg";
import carosol2 from "../../../images/tea-2.jpg";
import carosol3 from "../../../images/tea-3.jpg";

const Packaging = () => {
  return (
    <div>
      <h1 style={{ fontSize: 80, marginTop: "20" }}>Factory Equipments</h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosol1}
            style={{ height: 500 }}
            alt="First slide"
          />
          <Carousel.Caption
            style={{ marginBottom: 180, fontSize: 30, color: "white" }}
          >
            <h3 style={{ fontSize: 50 }}>Leaf Ready For Machine</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosol2}
            style={{ height: 500 }}
            alt="Second slide"
          />

          <Carousel.Caption
            style={{ marginBottom: 180, fontSize: 30, color: "Navy" }}
          >
            <h3 style={{ fontSize: 50 }}>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carosol3}
            style={{ height: 500 }}
            alt="Third slide"
          />

          <Carousel.Caption
            style={{ marginBottom: 180, fontSize: 30, color: "Navy" }}
          >
            <h3 style={{ fontSize: 50 }}>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Packaging;
