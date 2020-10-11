import React from "react";
import { compose, withProps } from "recompose";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

import { MAP_API_KEY } from '../../Utilities/constants'

const CustomGoogleMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return <GoogleMap
    defaultZoom={props?.defaultZoom}
    defaultCenter={props?.defaultCenter}
  >
    {props?.children}
  </GoogleMap>
});

const GoogleMapCard = (props) => {
  return <div className="container-fluid mt-4 white-bg">
    <div className="card_style">
      <div className="map-title">Your Route</div>
      <CustomGoogleMap
        defaultZoom={props?.defaultZoom}
        defaultCenter={props?.defaultCenter}
      >
        {props?.children}
      </CustomGoogleMap>
    </div>
  </div>
}



export default GoogleMapCard


