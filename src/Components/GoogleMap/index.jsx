import React from "react";
import {compose, withProps} from "recompose";
import {GoogleMap, Marker, Polyline, withGoogleMap, withScriptjs} from "react-google-maps";
import * as _ from 'lodash'
import {MAP_API_KEY} from '../../Utilities/constants'
import './index.scss'


const DEFAULT_LAT = 32.0647512
const DEFAULT_LNG = 34.7716747

const CustomMarker = (props) => {
	const {location, icon} = props || {}
	// eslint-disable-next-line no-undef
	const scaledSize = new google.maps.Size(40, 40);
	return <Marker icon={ {url: icon, scaledSize} } position={ location }>
	</Marker>
}

const Directions = (props) => {
	const {dataList} = props || {}
	const reformattedList = dataList.map(item => ({lat: item.latitude, lng: item.longitude}))
	return <Polyline path={ reformattedList }/>
}


const CustomGoogleMap = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${ MAP_API_KEY }&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={ {height: `100%`} }/>,
		containerElement: <div style={ {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0
		} }/>,
		mapElement: <div style={ {height: `100%`} }/>
	}),
	withScriptjs,
	withGoogleMap
)(props => {
	const {isDirections, events, defaultCenter = {}} = props || {}
	const center = {
		lat: defaultCenter?.lat || DEFAULT_LAT,
		lng: defaultCenter?.lng || DEFAULT_LNG
	}
	
	if (isDirections) {
		center.lat = events?.[0]?.latitude
		center.lng = events?.[0]?.longitude
	}
	return <GoogleMap
		defaultZoom={ props?.defaultZoom || 18 }
		defaultCenter={ center }>
		{ isDirections ?
			<Directions dataList={ events }/> :
			<CustomMarker location={ center } icon={ require('../../Images/marker.png') }/> }
	</GoogleMap>
});

const GoogleMapCard = (props) => {
	const {events, latitude, longitude} = props || {}
	const isDirections = _.isArray(events) && _.size(events) > 2
	const title = isDirections ? 'Route' : 'Location'
	const className = _.isEmpty(title) ? 'map-inner-item' : 'map-inner-item1'
	return <div className='col-12 col-md-6 col-lg-4 mt-3 px-4 px-sm-3'>
		<div className='map_card'>
			{ !_.isEmpty(title) && <div className="map-title">{ title }</div> }
			<div className={ `px-0 mx-0 mb-0 pb-0 position-relative ${ className }` }>
				<CustomGoogleMap
					events={ props?.events ||[] }
					defaultZoom={ props?.defaultZoom }
					defaultCenter={ {lat: latitude, lng: longitude} }
					isDirections={ isDirections }/>
			</div>
		</div>
	</div>
}


export default GoogleMapCard


