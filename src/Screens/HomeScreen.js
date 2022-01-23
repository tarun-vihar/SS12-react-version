import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, Container } from "react-bootstrap";

import buildingsList from "../buildings";
import Building from "./Building";

import "../css/home.css";

function HomeScreen() {
  return (
    <Row>
      {buildingsList.map((building) => (
        <Col key={building._id} sm={12} md={6} lg={4} xl={3}>
          <Building building={building}></Building>
        </Col>
      ))}
    </Row>
  );
}

export default HomeScreen;
