import React from "react";
import {compose, withProps} from "recompose";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import * as _ from 'lodash'
import {MAP_API_KEY} from '../../Utilities/constants'
import './index.scss'

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
	return <GoogleMap
		defaultZoom={ props?.defaultZoom }
		defaultCenter={ props?.defaultCenter }
	>
		{ props?.children }
	</GoogleMap>
});

const GoogleMapCard = (props) => {
	const {title} = props || {}
	const className=_.isEmpty(title)?'map-inner-item':'map-inner-item1'
	return <div className='col-12 col-md-6 col-lg-4 mt-3 px-4 px-sm-3'>
		<div className='map_card'>
			{!_.isEmpty(title)&&<div className="map-title">{ title }</div>}
			<div className={`px-0 mx-0 mb-0 pb-0 position-relative ${className}`}>
				<CustomGoogleMap
					defaultZoom={ props?.defaultZoom }
					defaultCenter={ props?.defaultCenter }>
					{ props?.children }
				</CustomGoogleMap>
			</div>
		</div>
	</div>
}


export default GoogleMapCard


