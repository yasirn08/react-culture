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
  Container
} from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout2";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} container={false} navbar={false}>
        <Container fluid={true} className='imgcity' style={{backgroundImage:'url(../static/frontpage.jpg)', height:'86vh', padding:'0px 0px'}}>
          
        </Container>
      </Layout>
    );
  }
}
