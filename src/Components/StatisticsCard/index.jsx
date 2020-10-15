import React from 'react'

import { Tooltip } from '..'

const StatisticsCard = ({ title = '', description = '', rainbow = {}, icon = '', index = 0 }) => {
	return <div className='container-fluid mt-4 white-bg'>
		<div className='card_item py-2 row px-0'>
			{icon ?
				<div className="icon vertical_divider col-5 px-2">
					<img src={icon} className='d-block' alt='info' />
					<span className='title'>{title}</span>
				</div>
				:
				<div className='col-5 px-2'>
					<img src={require('../../Images/info_icon.png')} className='info_icon d-block' alt='info' />
					<span className='title'>{title}</span>
					<span className='subtitle'>{description}</span>
				</div>
			}
			{icon ?
				<div className='col-7 pl-2 text-center'>
					<span className='icon-description'>{description}</span>
				</div>
				:
				<div className='col-7 pl-2'>
					<Tooltip {...rainbow} index={index}/>
				</div> //slider img
			}
		</div>
	</div>
}

export default StatisticsCard
