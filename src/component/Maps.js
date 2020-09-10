import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import { useGoogleMaps } from "react-hook-google-maps";
import "../assets/css/styleMaps.css"
const { Title, Paragraph } = Typography;
const Peta = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyDv5rpdcwSLfmpdHpVmf-J1FS-gjoq8zf4",
    // NOTE: even if you change options later
    {
      center: { lat: 0, lng: 0 },
      zoom: 3,
    }
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} style={{ width: 400, height: 300 }} />;
};

const Maps = () => {
  return (
    <Layout style={{ backgroundColor: "#fdf7f0" }}>
      <Row>
        <Col span={24} className="title">
          <Title className="tentang">Lokasi Pernikahan</Title>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="maps">
          <Peta></Peta>
        </Col>
      </Row>
    </Layout>
  );
};

export default Maps;
