import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import Rating from "../Component/Rating";

// import "../css/home.css";

function Building({ building }) {
  return (
    // <button className="button_box">
    //   <img className="images" src={building.image} alt="library"></img>
    //   <div className="media_body">
    //     <h2 className="building_title">{building.name}</h2>

    //     <Rating
    //       value={building.rating}
    //       text={`${building.numReviews} reviews`}
    //       color={"yellow"}
    //     />
    //     {/* <div className="my-3">
    //       <Rating
    //         value={building.rating}
    //         text={`${building.numReviews} reviews`}
    //         color={"yellow"}
    //       />
    //     </div> */}
    //   </div>
    // </button>

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
              value={building.rating}
              text={`${building.numReviews} reviews`}
              color={"yellow"}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Building;
