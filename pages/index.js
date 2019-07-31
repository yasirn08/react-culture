import Link from "next/link";
import React from "react";
import ReactDom from "react-dom";
import InfiniteCarousel from "react-items-carousel";

import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        {/* <Container>
          <Row className="row1">
            <Card className="cards1">
              <CardImg
                className="cardimg"
                top
                width="100%"
                src="../static/LA.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Los Angeles</CardTitle>
                <CardText>
                  From Venice Beach to the Hollywood Hills, there's more to LA
                  than celebrity and brunch
                </CardText>
              </CardBody>
            </Card>
            <Card className="cards1">
              <CardImg
                className="cardimg"
                top
                width="100%"
                src="../static/LONDON.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="cards1">
              <CardImg
                className="cardimg"
                top
                width="100%"
                src="../static/AUSTIN.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Row>
        </Container> */}
        <Container className="first-car">
          <h>Culture trip guides</h>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={3}
            slidesToShow={3}
            scrollOnDevice={true}
          >
            <div>
              <Link href="city">
                <Card className="cards1">
                  <CardImg
                    className="cardimg"
                    top
                    width="100%"
                    src="../static/AUSTIN.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Austin</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Los Angeles</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/LONDON.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>London</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/BE.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Beijing</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/BER.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Berlin</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/SF.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>San Fransisco</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/HK.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Hong Kong</CardTitle>
                  <CardText>
                    From Venice Beach to the Hollywood Hills, there's more to LA
                    than celebrity and brunch
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </InfiniteCarousel>
        </Container>
        <Container className="first-car">
          <h>Spotlight on Paris</h>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
          >
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/pa1.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/pa2.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/pa3.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/pa4.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle className="redtitle">Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
          </InfiniteCarousel>
        </Container>
        <Container className="first-car">
          <h>Start exploring Tokyo</h>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              }
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
          >
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/AUSTIN.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LONDON.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="cards2">
                <CardImg
                  className="cardimg2"
                  top
                  width="100%"
                  src="../static/LA.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle>Los Angeles</CardSubtitle>
                  <CardText>Hello</CardText>
                </CardBody>
              </Card>
            </div>
          </InfiniteCarousel>
        </Container>
        <Container className="secondlast">
          <h3>The Best of Culture Trip</h3>
          <p>Our top stories from around the world</p>
          <Row>
            <Col sm="8">
              <Row>
                <Col sm="6">
                  <Card className="cards2">
                    <CardImg
                      className="cardimg2"
                      top
                      width="100%"
                      src="../static/LA.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardSubtitle>Los Angeles</CardSubtitle>
                      <CardText>Hello</CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card className="cards2">
                    <CardImg
                      className="cardimg2"
                      top
                      width="100%"
                      src="../static/LA.jpg"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardSubtitle>Los Angeles</CardSubtitle>
                      <CardText>Hello</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col sm="4">
              <Row>
                <Col sm="12">
                  <Row>
                    <Col sm="6" className="subcards">
                      <img src="../static/LA.jpg" width="120%" />
                    </Col>
                    <Col sm="5" className="paracard">
                      <b>
                        <p>See and Do</p>
                      </b>
                      <p>All Aboard: Please come inside</p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row>
                    <Col sm="6" className="subcards">
                      <img src="../static/LA.jpg" width="120%" />
                    </Col>
                    <Col sm="5" className="paracard">
                      <b>
                        <p>See and Do</p>
                      </b>
                      <p>All Aboard: Please come inside</p>
                    </Col>
                  </Row>
                </Col>
                <Col sm="12">
                  <Row>
                    <Col sm="6" className="subcards">
                      <img src="../static/LA.jpg" width="120%" />
                    </Col>
                    <Col sm="5" className="paracard">
                      <b>
                        <p>See and Do</p>
                      </b>
                      <p>All Aboard: Please come inside</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="lastcard">
          <h3>Cultural Trip Original Series</h3>
          <Row>
            <Col sm="4">
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/AUSTIN.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/AUSTIN.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="cards1">
                <CardImg
                  className="cardimg"
                  top
                  width="100%"
                  src="../static/AUSTIN.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
