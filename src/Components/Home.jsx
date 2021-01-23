import React, {Component} from "react";
import Blogs from './Blogs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <Container>
      <Row>
        <Blogs/>
      </Row>
    </Container>
  );
}

export default Home;
