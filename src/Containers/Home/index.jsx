import './index.scss'
import React from 'react'
import moment from "moment";
import CustomGoogleMap from "../../Components/CustomGoogleMap";

const Logo = () => {
	return <div className='d-flex py-3 justify-content-center'>
		<img src={ require('../../Images/logo.png') } className='logo_style' alt='logo'/>
	</div>
}

const HeaderInfo = () => {
	return <div className='container-fluid'>
		<div className='row'>
			<div className='col-12'>
				<div className='header_title mt-3'>Walk summary</div>
				<div className='time_style'>{ moment().format('dddd,MMMM DD, YYYY hh:mm a') }</div>
			</div>
		</div>
		<div className='row mt-2'>
			<div className='large_time_style col-6 pr-4 text-right vertical_divider '>
				0:30 <sub className='sub_style'>sec</sub>
			</div>
			<div className='large_time_style col-6 pl-4 text-left'>
				10 <sub className='sub_style'>Steps</sub></div>
		</div>
	</div>
}

const StatisticsCard = () => {
	return <div className='container-fluid mt-4'>
		<div className='card_item py-2 row px-0'>
			<div className='col-5 vertical_divider px-2'>
				<img src={ require('../../Images/info_icon.png') } className='info_icon d-block' alt='info'/>
				<span className='title'>Step Rate</span>
				<span className='subtitle'>8 steps per minute</span>
			</div>
			<div className='col-7 pl-2'>
			</div>
		</div>
	</div>
}

const Home = (props) => {
	return <div className='home_container'>
		<Logo/>
		<div className='body_container'>
			<div className='divider_style'/>
			<HeaderInfo/>
			<div className='px-3'>
				<StatisticsCard/>
				<StatisticsCard/>
				<StatisticsCard/>
				<StatisticsCard/>
				<StatisticsCard/>
				<div className='map_card mt-4 pb-0'>
					<div className='header_title text-left pl-4 pt-2 pb-2'>Your Route</div>
					<CustomGoogleMap/>
				</div>
			</div>
			<div className='footer_container'>
				<img src={ require('../../Images/app_store.png') } className='mr-1' alt='info'/>
				<img src={ require('../../Images/play_store.png') } className='ml-1' alt='info'/>
			</div>
		</div>
	</div>
}

export default Home
