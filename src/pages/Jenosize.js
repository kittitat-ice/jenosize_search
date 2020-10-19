import React from "react";
import Map from '../components/Map';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Jenosize() {
  return (
    <>
      <Header />
      <div style={style.body}>
        <div style={style.mapContainer}>
          <Map />
        </div>
        <p style={style.text}>Google Maps</p>
      </div>
      <Footer />
    </>
  );
}

export default Jenosize;

const style = {
  body: {
    padding: 50,
    width: '100%',
  },
  mapContainer: {
    display: 'flex',
    justifyContent:'center',
  },
  text: {
    textAlign: 'center',
  },
}