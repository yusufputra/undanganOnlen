import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "../assets/css/stylePengantin.css";
import LazyLoad from "react-lazyload";
import { Img } from "react-image";
import bng from "../assets/img/braidngroom.svg";
const { Title, Paragraph } = Typography;
const Pengantin = () => {
  return (
    <Layout style={{ backgroundColor: "#fdf7f0", padding: "20px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={8} md={24} xs={24} className="info gutter-row margintop">
          <div className="turunin">
            <Title className="head">Fauzely Wiji R.</Title>
            <Paragraph>
              Putri Pertama dari Bapak Supriyadi dan Ibu Suningsih
            </Paragraph>
          </div>
        </Col>
        <Col lg={8} md={24} xs={24} className="info gutter-row">
          <LazyLoad>
            <Img src={bng} />
          </LazyLoad>
        </Col>
        <Col lg={8} md={24} xs={24} className="info gutter-row margintop">
          <div className="turunin">
            <Title className="head">Viesa Risqi A.</Title>
            <Paragraph>
              Putra Pertama dari Bapak Busari dan Ibu Sri Handayani
            </Paragraph>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Pengantin;
