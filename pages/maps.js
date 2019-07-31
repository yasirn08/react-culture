import React, { Component } from "react";
import Layout from "../components/layout";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";

class Map extends React.Component {
  render = () => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 33.68998, lng: 73.029916 }}
      >
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyA2c7B2FngaaTAlTNyx9urkwrjmXxmkwsE"}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `550px`, width: "45%" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
