import React from "react";
import "./App.css";
import { Layout } from "antd";
import Header from "./component/Header";
import Pengantin from "./component/Pengantin";
import Maps from "./component/Maps";
import Rsvp from "./component/Rsvp";
import Footer from "./component/Footer";
import Tanggal from "./component/Tanggal";

function App() {
  return (
    <Layout style={{overflowX:"hidden"}}>
      <Header></Header>
      <Pengantin></Pengantin>
      <Tanggal></Tanggal>
      <Maps></Maps>
      {/* <Rsvp></Rsvp> */}
      <Footer></Footer>
    </Layout>
  );
}

export default App;
