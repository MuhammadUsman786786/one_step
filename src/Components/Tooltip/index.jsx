import './index.scss'
import {toLower} from 'lodash'
import React, {useEffect, useRef, useState} from 'react'

const SubSuperScript = ({units}) => {
	const formattedUnit = toLower(units)
	if (formattedUnit === '°') {
		return <sup>{ formattedUnit }</sup>
	}
	return <span className='subscript_style'>{ formattedUnit }</span>
}

const Tooltip = (props) => {
	const {value = 0, units, bubble_color = '', bubble_percent = 0, index} = props || {}
	const [ width, setWidth ] = useState(0);
	const elementRef = useRef(null);
	useEffect(() => {
		setWidth(elementRef.current.clientWidth)
	}, [])
	
	let quantizeValue = bubble_percent * 100
	if (quantizeValue < 0) {
		quantizeValue = 0
	} else if (quantizeValue > 100) {
		quantizeValue = 100
	}
	
	return <div className='d-flex'>
		<div className='tooltip_container'
		     style={ {
			     marginLeft: `${ quantizeValue }%`,
			     transform: `translate(-${ width / 2 }px,0)`
		     } }
		>
			<div className='tooltip_value_container'
			     ref={ elementRef } style={ {backgroundColor: bubble_color,} }>
				{ value }
				<SubSuperScript units={ units }/>
			</div>
			<div className='align-self-center triangle-down' style={ {borderTopColor: bubble_color} }/>
		</div>
	</div>
}

export default Tooltip
