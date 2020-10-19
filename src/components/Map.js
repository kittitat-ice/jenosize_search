import React from "react";
import GoogleMapReact from 'google-map-react';
import marker from '../assets/map-marker.svg';

const apiKey = 'AIzaSyDM5zeWpaPPaPnaNFysmh81nNN9I1G3kac'
//const apiKey = ''

function Map() {


  const Marker = ({ text }) => (
    <div style={{position: 'absolute', transform: 'translate(-50%, -50%)'}}>
      <img src={marker} alt="marker" width={32} height={32} />
      <p style={{width: 100, position:'absolute', left: 32, top: 0, fontSize: 16}}>{text}</p>
    </div>
  )

  return (
    <div style={{height: '70vh', width: '70vw', backgroundColor: 'beige'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={[13.893992, 100.516288]}
        defaultZoom={18}
      >
        <Marker
          lat={13.893992}
          lng={100.516288}
          text="Jenosize Digital Group"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;