import React from 'react'
import './index.scss'
import {min, toLower} from 'lodash'

const SubSuperScript =({units})=>{
	const formattedUnit=toLower(units)
	if(formattedUnit==='°'){
		return <sup>{ formattedUnit }</sup>
	}
	return <span className='subscript_style'>{formattedUnit}</span>
}

const Tooltip = ({value = 0, units, bubble_color = '', bubble_percent = 0, index}) => {
	const quantizeValue = min([ bubble_percent*100, 90 ])
	return <div className='d-flex'>
		<div className='tooltip_container' style={ {marginLeft: `${ quantizeValue }%`} }>
			<div className='tooltip_value_container' style={ {
				backgroundColor: bubble_color,
			} }>
				{ value }
				<SubSuperScript units={units}/>
			</div>
			<div className='align-self-center triangle-down' style={ {borderTopColor: bubble_color} }/>
		</div>
	</div>
}

export default Tooltip
