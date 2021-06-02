import React from "react";
import MapViewDirections from "react-native-maps-directions";
import { googleMapsConfig } from "../../constants/apiKey";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey={googleMapsConfig.apiKey}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
