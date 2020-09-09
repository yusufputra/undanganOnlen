import React from "react";
import "./App.css";
import { Layout } from "antd";
import Header from "./component/Header";
import Pengantin from "./component/Pengantin";
import Galeri from "./component/Galeri";
import Maps from "./component/Maps";
import Rsvp from "./component/Rsvp";
import Footer from "./component/Footer";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Pengantin></Pengantin>
      <Galeri></Galeri>
      <Maps></Maps>
      <Rsvp></Rsvp>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
