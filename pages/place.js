import React from "react";
import Router from "next/router";
import Link from "next/link";
import fetch from "isomorphic-fetch";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText
} from "reactstrap";
import Map from './maps'
import Page from "../components/page";
import Layout from "../components/layout2";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} container={false} navbar={false}>
        <Container style={{ width: "30%", marginTop: "2%", marginLeft: "35%" }}>
          <Row>
            <Button
              className="btn-3-1"
              style={{
                borderRadius: "20px",
                background: "transparent",
                color: "rgb(0, 168, 135)",
                fontSize: "13px",
                fontWeight: "500",
                borderColor: "rgb(230, 230, 230)"
              }}
            >
              Asia
            </Button>
            <Button
              className="btn-3-1"
              style={{
                borderRadius: "20px",
                background: "transparent",
                color: "rgb(0, 168, 135)",
                fontSize: "13px",
                fontWeight: "500",
                borderColor: "rgb(230, 230, 230)",
                marginLeft: "10px"
              }}
            >
              Japan
            </Button>
            <Button
              className="btn-3-1"
              style={{
                borderRadius: "20px",
                background: "transparent",
                color: "rgb(0, 168, 135)",
                fontSize: "13px",
                fontWeight: "500",
                borderColor: "rgb(230, 230, 230)",
                marginLeft: "10px"
              }}
            >
              Tokyo
            </Button>
            <Button
              className="btn-3-1"
              style={{
                borderRadius: "20px",
                background: "transparent",
                color: "rgb(0, 168, 135)",
                fontSize: "13px",
                fontWeight: "500",
                borderColor: "rgb(230, 230, 230)",
                marginLeft: "10px"
              }}
            >
              See and Do
            </Button>
          </Row>
        </Container>
        <Container fluid={true} style={{ width: "92%" }}>
          <Row
            style={{
              width: "60%",
              textAlign: "center",
              marginLeft: "20%",
              marginTop: "20px"
            }}
          >
            <h1 style={{ fontSize: "3em" }}>
              9 Quirky Experiences in Tokyo, Japan
            </h1>
          </Row>
          <Row style={{ marginTop: "3%" }}>
            <Col xs='12' sm='6' className='main-col-3-1'>
              <Container className="cont-3-1">
                <Row>
                  <img src="../static/jap-1.jpg" width="100%" />
                  <p
                    style={{
                      color: "rgb(18, 20, 22)",
                      fontSize: "14px",
                      width: "100%"
                    }}
                  >
                    Japanese chefs cook takoyaki in Tokyo, Japan | © Gumpanat
                    Thavankitdumrong / Alamy Stock Photo
                  </p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save to Wishlist
                  </Button>
                </Row>
                <Row>
                  <p
                    style={{ fontSize: "20px", marginTop: "4%", width: "94%" }}
                  >
                    “There’s something for everyone” is a phrase used with
                    abandon. But if it applies to one city more than any other,
                    that place is definitely Tokyo. Whether you’re into sumo
                    wrestling, samurai performances or slicing fish, there
                    really is an experience for everyone – here are nine of the
                    quirkiest.
                  </p>
                </Row>
                <Row
                  className="rowcard-3"
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginTop: "5%",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(211, 211, 211)"
                  }}
                >
                  <Col style={{ marginTop: "3%" }}>
                    <h5>Sign Up. Get More. Do More</h5>
                    <p>
                      {" "}
                      Read the Culture Trip newsletter. Because you want to see
                      what's out there.{" "}
                    </p>
                  </Col>
                  <Col>
                    <img src="../static/BE.jpg" width="106%" />
                  </Col>
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
              <Container className="cont-3-1">
                <Row style={{ marginTop: "5%" }}>
                  <h5>Learn the secrets of samurai</h5>
                </Row>
                <Row>
                  <p>Sports Center</p>
                </Row>
                <Row>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600"
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      background: "white",
                      color: "rgb(0, 168, 135)",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "5%"
                    }}
                  >
                    Share
                  </Button>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                  <img src="../static/samurai.jpg" width="100%" />
                  <p>
                    Samurai training in a traditional dojo, in Tokyo | © fabio
                    formaggio / Alamy Stock Photo
                  </p>

                  <Button
                    style={{
                      background: "rgb(0, 168, 135)",
                      color: "white",
                      borderRadius: "20px",
                      borderColor: "rgb(0, 168, 135)",
                      fontWeight: "600",
                      marginLeft: "40%"
                    }}
                  >
                    {" "}
                    Book Now{" "}
                  </Button>
                </Row>
                <Row style={{marginTop:'5%', fontSize:'18px'}}>
                  For anyone who grew up with Japanese movies, video games or
                  history, samurai are figures of endless fascination, often
                  shrouded in mystery. “Secrets of the Samurai” is a traditional
                  stage workshop that will allow you to walk in the shoes of
                  these legendary warriors and discover the world they
                  inhabited. This Ginza-based dojo runs samurai kembu classes,
                  which see participants learn to fight with a katana
                  (traditional sword), dance with Japanese fans and recite
                  poetry like a bushi. Bowing and walking lessons let you embody
                  the spirit fully while you wear the full costume. Besides your
                  memories, you get to leave with pictures and a completion
                  certificate.
                </Row>
              </Container>
            </Col>
            <Col xs='12' sm='6'><Container fluid={true} style={{position:'fixed', zIndex:'999'}}><Map/></Container></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
