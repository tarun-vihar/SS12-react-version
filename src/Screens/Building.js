import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "../Component/Rating";

function Building({ building }) {
  const average = (array) =>
    array.reduce((total, { rating }) => total + Number(rating), 0) /
    array.length;

  let avgRating = average(building.reviews);

  building = { ...building, avgRating };

  return (
    <Card className="my-3 py-3 rounded">
      <Link to={`/building/${building._id}`}>
        <Card.Img src={building.image_url}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${building._id}`}>
          <Card.Title as="div">
            <strong>{building.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={building.avgRating}
              text={`${building.reviews.length} reviews`}
              color={"yellow"}
            />
          </div>
        </Card.Text>

        <Card.Text as="div">
          <b> {building.operating_hours}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Building;
