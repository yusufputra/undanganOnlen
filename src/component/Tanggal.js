import React from "react";
import { Layout, Row, Col, Typography } from "antd";
const { Title, Paragraph } = Typography;
const Tanggal = () => {
  return (
    <Layout style={{ backgroundColor: "#fdf7f0", padding: "20px" }}>
      <Row>
        <Col span={24} className="title">
          <Title className="tentang">Acara Pernikahan</Title>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col md={8} xs={24} className="info gutter-row">
          <div>
            <Title>Akad Nikah</Title>
            <Paragraph>
              Pukul 08.00
            </Paragraph>
          </div>
        </Col>
        <Col md={8} xs={24} className="info gutter-row">
          <div>
            <Title>Temu Manten</Title>
            <Paragraph>
              Pukul 10.00
            </Paragraph>
          </div>
        </Col>
        <Col md={8} xs={24} className="info gutter-row">
          <div>
            <Title>Resepsi</Title>
            <Paragraph>
              Pukul 15.00
            </Paragraph>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Tanggal;
