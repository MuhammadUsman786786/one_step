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
	const quantizeValue = min([ bubble_percent*100, 95 ])
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
	// useEffect(() => {
	//   var style = document.createElement("style");
	//   // Append the style tag to head
	//   document.head.appendChild(style);
	//   // Grab the stylesheet object
	//   const sheet = style.sheet
	//   // Use addRule or insertRule to inject styles
	//   sheet.addRule(`.tip_${index}::before`, `border-color: ${bubble_color} transparent transparent`);
	//   sheet.insertRule(`.tip_${index}::before { border-color: ${bubble_color} transparent transparent}`, 0)
	// }, [])
	// let marginLeft = ((bubble_percent * 100) - 20)
	// return <div className={`custom-tooltip tip_${index}`} style={{ marginLeft: `${marginLeft}%`, background: bubble_color }}>
	//   {value} <sub>{ units }</sub>
	// </div>
}

export default Tooltip
