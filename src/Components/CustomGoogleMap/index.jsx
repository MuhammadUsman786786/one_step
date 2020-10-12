import './index.css'
import React from "react";
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

const MyMapComponent = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div className='map_inner_container'/>,
		containerElement: <div className='map_inner_container'/>,
		mapElement: <div className='map_inner_container'/>,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={ 8 }
		defaultCenter={ {lat: -34.397, lng: 150.644} }
	>
		{ props.isMarkerShown && <Marker position={ {lat: -34.397, lng: 150.644} }/> }
	</GoogleMap>
)

export default MyMapComponent
