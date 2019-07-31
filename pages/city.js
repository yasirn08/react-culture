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
import Page from "../components/page";
import Layout from "../components/layout2";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} container={false} navbar={false}>
        <Container
          fluid={true}
          className="imgcity"
          style={{
            backgroundImage: "url(../static/frontpage.jpg)",
            height: "80vh",
            padding: "0px 0px"
          }}
        >
          <Container className="head-2">
            <Button className="btn-2-1-1"> USA </Button>
            <Button className="btn-2-1-2"> New York</Button>
            <h1 className="title-2">New York</h1>
            <Button className="btn-2-2"> Exploring Neighbourhoods</Button>
          </Container>
        </Container>
        <Container
          className="second-2"
          style={{ textAlign: "left", marginTop: "30px", width: "50%" }}
        >
          <h3> Introducing New York City</h3>
          <p style={{ marginTop: "20px", fontSize: "16px", color:'rgb(112, 112, 112)' }}>
            {" "}
            A densely populated metropolis nearly half of whose residents were
            born outside the USA, New York City really embraces the term
            “melting pot.” Every corner of the world is packed into the Big
            Apple’s five boroughs, from vibrant enclaves such as Little Guyana
            in Queens and midtown’s Koreatown to lower Manhattan’s bustling
            Chinatown and Little Italy. The city wears its history of welcoming
            outsiders with pride. The Tenement Museum, on Manhattan’s Lower East
            Side, brings the stories of New York’s immigrant communities to
            life, while Ellis Island and the iconic Statue of Liberty are
            enduring reminders of the freedom and opportunity America represents
            for exiles.
          </p>
          <h4 style={{ fontSize: "20px" }}> Best of New York tourism</h4>
          <p style={{ marginTop: "20px", fontSize: "16px", color:'rgb(112, 112, 112)' }}>
            {" "}
            The majority of New York’s best-known tourist attractions can be
            found in Manhattan. Just south of Central Park, midtown – home to
            Times Square, Broadway and many iconic skyscrapers – has all the
            glitz and glamor of the city that never sleeps. Lower Manhattan is
            crammed with cool districts, including the West and East villages,
            the très chic Nolita neighborhood and the shopping destination SoHo.
            Many visitors spend their entire visit in Manhattan alone, but the
            city’s four outer boroughs have plenty of their own charm and things
            to do. Brooklyn is the hippest of the bunch, boasting experimental
            nightclubs, gorgeous brownstone buildings and unrivaled views of
            Manhattan’s skyline across the East River. Queens is blessed with
            green spaces and great restaurants, while the Bronx has Yankee
            Stadium and the New York Botanical Garden. Known for its free
            commuter ferry, Staten Island is the least busy and greenest of the
            five, giving New Yorkers a much-needed breath of fresh air.
          </p>
          <h3>Explore by</h3>
          <Button
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "40px",
              paddingBottom: "40px",
              borderRadius: "10px",
              backgroundImage: "url(../static/pa2.jpg)",
              borderColor: "transparent",
              fontWeight: "600",
              marginTop: "20px"
            }}
          >
            Things to do
          </Button>
          <Button
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "40px",
              paddingBottom: "40px",
              marginLeft: "10px",
              borderRadius: "10px",
              backgroundImage: "url(../static/pa3.jpg)",
              borderColor: "transparent",
              fontWeight: "600",
              marginTop: "20px"
            }}
          >
            Food and Drinks
          </Button>
          <Button
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              paddingTop: "40px",
              paddingBottom: "40px",
              marginLeft: "10px",
              borderRadius: "10px",
              backgroundImage: "url(../static/pa1.jpg)",
              borderColor: "transparent",
              fontWeight: "600",
              marginTop: "20px"
            }}
          >
            Places to stay
          </Button>
        </Container>
        <Container fluid={true} className="second-3" style={{marginTop:'50px',width:'90%'}}>
          <h3>Featured Articles</h3>
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
        <Container fluid={true} className='second-4' style={{background:'rgb(34, 34, 34)', marginTop:'30px', paddingBottom:'70px'}}>
          <Row>
          <h3 style={{color:'white', paddingTop:'20px', paddingLeft:'15px'}}> Featured Videos </h3>
          </Row>
          <Row>
            <Col style={{marginTop:'20px'}}>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/8j3yghRLKgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col>
            <p style={{marginTop:'20px',marginLeft:'20px', color:'rgb(255, 1, 64)',fontWeight:'700'}}>TOUR & STAY</p>
            <h2 style={{marginLeft:'20px', color:'white'}}> A Remedy For Ravers </h2>
            <p style={{marginLeft:'20px', color:'white',fontWeight:'700', fontSize:'12px',marginTop:'20px'}}>2:53</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
