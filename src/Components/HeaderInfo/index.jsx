import React from 'react'
import moment from "moment"
import parse from 'html-react-parser'

import { getFormatTime } from '../../Utilities/helper';

const HeaderInfo = ({ time = null, steps = null }) => {
	return <div className='container-fluid'>
		<div className='row'>
			<div className='col-12'>
				<div className='header_title mt-3'>Walk summary</div>
				<div className='time_style'>{moment().format('dddd,MMMM DD, YYYY hh:mm a')}</div>
			</div>
		</div>
		<div className='row mt-2'>
			<div className='large_time_style col-6 pr-4 text-right '>
				{parse(getFormatTime(time))}
			</div>
			<div className='large_time_style col-6 pl-4 text-left'>
				{steps || 0} <sub className='sub_style'>Steps</sub></div>
		</div>
	</div>
}

export default HeaderInfo
