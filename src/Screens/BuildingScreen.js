import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  Card,
  Form,
  ListGroupItem,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Rating from "../Component/Rating";
import Message from "../Component/Message";

import buildingsList from "../buildings";
function BuildingScreen() {
  const { id } = useParams();

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState();
  const [floorid, setFloorId] = useState(1);
  const [buildingReviews, setBuildingRating] = useState([]);

  let building = {};
  let floor = {};

  const findBuildingById = (id = 1) => {
    let buildingDetails = buildingsList.filter(
      (building) => building._id == id
    );
    building = buildingDetails[0];
  };

  const findFloorByFloorId = (floorid = 1) => {
    console.log(floorid);
    let floorDeatails = floors.filter((floor) => floor.id == floorid);
    floor = floorDeatails[0];
  };

  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {}
    );

  findBuildingById(id);
  const floors = building["floor"];

  findFloorByFloorId(floorid);

  let accessableFeaturesListIn =
    !!floor && floor["features"].filter((feature) => feature.accessable);

  let groupByObj = groupBy(accessableFeaturesListIn, "name");

  const submitHandler = (e) => {
    e.preventDefault();

    building.reviews.unshift({ comment, rating });
    setBuildingRating(building.reviews);
    console.log(building);

    setRating(0);
    setComment("");
  };

  console.log(floor);
  return (
    <div>
      {/* <Link to="/" className="btn btn-light my-3">
        Back
      </Link> */}
      <div>
        <Row>
          {/* <Col md={3}>
            {" "}
            <Image src={building.image_url} alt={building.name} fluid />
          </Col> */}

          <Col md={4}>
            {" "}
            <Row>
              <Col md={12}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3> {building.name}</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    {" "}
                    Description : <b> {building.description} </b>{" "}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Operating Hours :<b> {building.operatingHrs} </b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Contact Details : <b> {building.contact}</b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating
                      value={building.rating}
                      text={`${building.numReviews} reviews`}
                      color="yellow"
                    ></Rating>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <hr />
            <Row className="my-2">
              <Col md={12}>
                <h5> {floor.name} Accessable Featues </h5>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Number of WashRooms ={" "}
                    {!!groupByObj["bathroom"]
                      ? groupByObj["bathroom"].length
                      : 0}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Number of Entrance/Exit =
                    {!!groupByObj["entrance"]
                      ? groupByObj["entrance"].length
                      : 0}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Number of Elevators =
                    {!!groupByObj["elevators"]
                      ? groupByObj["elevators"].length
                      : 0}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Number of Stairs =
                    {!!groupByObj["elevators"]
                      ? groupByObj["elevators"].length
                      : 0}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          <Col md={8}>
            <Row>
              <Form.Control
                required
                as="select"
                value={floorid}
                onChange={(e) => setFloorId(e.target.value)}
              >
                {building["floor"].map((floor) => (
                  <option key={floor.id} value={floor.id}>
                    {floor.name}
                  </option>
                ))}
              </Form.Control>
              <Col md={12}>
                <Image src={floor.image} alt={floor.name} fluid />
              </Col>
            </Row>

            <Row className="my-5">
              <Col md={6}>
                <ListGroup>
                  <ListGroup.Item>
                    <h4>Write a review</h4>

                    {/* <Message variant="success">Review Submitted</Message> */}

                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="comment">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="5"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>

                      <Button
                        disabled={false}
                        type="submit"
                        variant="primary"
                        className="my-2"
                      >
                        Submit
                      </Button>
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <h4>Reviews</h4>
                {building.reviews.length === 0 && (
                  <Message variant="info">No Reviews</Message>
                )}

                <ListGroup variant="flush">
                  {building.reviews.map((review) => (
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} color="#f8e825" />
                      <p>
                        {!!review.createdAt &&
                          review.createdAt.substring(0, 10)}
                      </p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BuildingScreen;
