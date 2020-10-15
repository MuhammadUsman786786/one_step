import './index.scss'
import {Splash} from '..'
import moment from "moment";
import {toast} from 'react-toastify'
import React, {useEffect, useState} from 'react'
import {getFormattedSeconds} from "../../Utilities/Transform";
import CustomGoogleMap from "../../Components/CustomGoogleMap";
import {CARD_TYPES, DATA_1, SAMPLE_DATA_URL} from '../../Utilities/constants'

const Logo = () => {
	return <div className='d-flex py-3 justify-content-center border-bottom bg-white'>
		<img src={ require('../../Images/home_logo.png') } className='logo_style' alt='logo'/>
	</div>
}

const HeaderInfo = ({metadata}) => {
	const { seconds, steps, timestamp} = metadata || {}
	const {formattedTime} = getFormattedSeconds(seconds)
	return <div className='container-fluid'>
		<div className='row'>
			<div className='col-12 col-md-6 col-lg-5 '>
				<div className='header_title mt-3 text-center text-md-left'>Walk summary</div>
				<div className='time_style text-center text-md-left'>
					{ moment(timestamp).format('dddd,MMMM DD, YYYY hh:mm a') }
				</div>
			</div>
			<div className='large_time_style vertical_divider pr-4 text-right col-6 col-md-3 col-lg-2 '>
				{ formattedTime } <sub className='sub_style'>sec</sub>
			</div>
			<div className='large_time_style text-left pl-4 col-6 col-md-3 col-lg-2 '>
				{ steps } <sub className='sub_style'>steps</sub></div>
		</div>
	</div>
}

const StatisticsCard = (props) => {
	const {title,description}=props||{}
	return <div className='container-fluid mt-4'>
		<div className='card_item py-2 row px-0'>
			<div className='col-5 vertical_divider px-2'>
				<img src={ require('../../Images/info_icon.png') } className='info_icon d-block' alt='info'/>
				<span className='title'>{ title }</span>
				<span className='subtitle'>{ description }</span>
			</div>
			<div className='col-7 pl-2'>
			</div>
		</div>
	</div>
}

const Home = (props) => {
	
	const [ showSplash, setSplash ] = useState(true)
	const [ response, setResponse ] = useState(DATA_1)
	const [ error, setError ] = useState(null)
	useEffect(() => {
		return setSplash(false)
		setTimeout(() => {
			fetch(SAMPLE_DATA_URL, {headers: {'Content-Type': 'application/json',}})
				.then(res => res.json())
				.then((result) => {
					setResponse(result)
					setSplash(false)
				}).catch(({message}) => {
					setError(message)
				})
				.finally(() => {
					setSplash(false)
				})
		}, 1000)
	}, [])
	
	
	if (error) {
		toast.error(error)
	}
	
	if (showSplash) {
		return <Splash/>
	}
	
	const {cards, metadata} = response || {}
	return <div className='home_container'>
		<Logo/>
		<div className='body_container'>
			<HeaderInfo metadata={ metadata }/>
			<div className='px-3'>
				{ cards?.map((item) => {
					if (item.template === CARD_TYPES.SIMPLE_CARD) {
						return <StatisticsCard { ...item }/>
					}
					return null
				}) }
				{/*<StatisticsCard*/}
				{/*	icon={ require('../../Images/idea.png') }*/}
				{/*	title={ INSIGHT.TITLE }*/}
				{/*	description={ INSIGHT.DESCRIPTION }*/}
				{/*/>*/}
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
