import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "../assets/css/styleHeader.css";
const { Title, Paragraph } = Typography;

const Header = () => {
  return (
    <Layout className="layout">
      <Row className="row">
        <Col span={24} className="col">
          <Title className="head">Fauzely Wiji R.</Title>
          <Title className="conj">dan</Title>
          <Title  className="head">Viesa Risqi A.</Title>
          <Paragraph>Kami menikah pada 4 Februari 2020</Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default Header;
