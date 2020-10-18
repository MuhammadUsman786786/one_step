import './index.scss'
import {Splash} from '..'
import moment from "moment";
import {toast} from 'react-toastify'
import React, {useEffect, useState} from 'react'
import {getFormattedSeconds} from "../../Utilities/Transform";
import {Tooltip} from "../../Components";
import {CARD_TYPES, DATA_2, SAMPLE_DATA_URL} from '../../Utilities/constants'
import GoogleMapCard from "../../Components/GoogleMap";

const Logo = () => {
	return <div className='d-flex py-3 justify-content-center border-bottom bg-white'>
		<img src={require('../../Images/home_logo.png')} className='logo_style' alt='logo' />
	</div>
}

const HeaderInfo = ({ metadata }) => {
	const { seconds, steps, timestamp } = metadata || {}
	const { formattedTime } = getFormattedSeconds(seconds)
	return <div className='container-fluid'>
		<div className='row mt-2'>
			<div className='col-12 col-md-5 col-lg-4 '>
				<div className='header_title mt-3 text-center text-md-left'>Walk summary</div>
				<div className='time_style text-center text-md-left'>
					{moment(timestamp).format('dddd,MMMM DD, YYYY hh:mm a')}
				</div>
			</div>
			<div className='large_time_style vertical_divider pr-4 text-right col-6 col-md-3 col-lg-2 '>
				{formattedTime} <sub className='sub_style'>sec</sub>
			</div>
			<div className='large_time_style text-left pl-4 col-6 col-md-3 col-lg-2 '>
				{steps} <sub className='sub_style'>steps</sub></div>
		</div>
	</div>
}

const StatisticsCard = (props) => {
	const { title, description, index, rainbow } = props || {}
	return <div className='col-12 col-md-6 col-lg-4 mt-3'>
		<div className='card_item row mx-2 mx-sm-0 bg-white'>
			<div className='col-5 col-md-12'>
				<img src={require('../../Images/info_icon.png')} className='info_icon d-block' alt='info' />
				<span className='title'>{title}</span>
				<span className='subtitle'>{description}</span>
			</div>
			<div className='border-bottom w-100 mt-2 mb-2 mx-2 d-none d-md-inline-block' />
			<div className='slider-container col-7 col-md-12 pt-lg-2 d-flex flex-column justify-content-end gradient_border_left px-2 px-md-3'>
				<Tooltip {...rainbow} index={index} />
				<div className="d-flex">
					<div className='gradient_style' />
				</div>
				<div className='d-flex justify-content-between'>
					<span className='subtitle'>{rainbow?.start}</span>
					<span className='subtitle'>{rainbow?.end}</span>
				</div>
			</div>
		</div>
	</div>
}

const IdeaIconCard = (props) => {
	const { title, content } = props || {}
	return <div className='col-12 col-md-6 col-lg-4 mt-3'>
		<div className='card_item row mx-2 mx-sm-0 bg-white insight_card_item'>
			<div className='col-5 col-md-12 idea-icon'>
				<img src={require('../../Images/idea.png')} className='d-block' alt='info' />
				<span className='title'>{title}</span>
			</div>
			<div className='border-bottom w-100 mt-2 mb-2 mx-2 d-none d-md-inline-block' />
			<div className='col-7 col-md-12 pt-lg-2 align-self-center gradient_border_left px-3'>
				<span className='idea-icon-description'>{content}</span>
			</div>
		</div>
	</div>
}

const MapCard = (props) => {
	const { title, content } = props || {}
	return <div className='col-12 col-md-6 col-lg-4 mt-3'>
		<div className='card_item row mx-2 mx-sm-0 bg-white mb-0 pb-0 mt-0 pt-0'>
			<GoogleMapCard defaultZoom={10} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>
		</div>
	</div>
}

const Home = (props) => {

	const [showSplash, setSplash] = useState(true)
	const [response, setResponse] = useState(DATA_2)
	const [error, setError] = useState(null)
	useEffect(() => {
		return setSplash(false)
		setTimeout(() => {
			fetch(SAMPLE_DATA_URL, { headers: { 'Content-Type': 'application/json', } })
				.then(res => res.json())
				.then((result) => {
					setResponse(result)
					setSplash(false)
				}).catch(({ message }) => {
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
		return <Splash />
	}

	const { cards, metadata } = response?.summary || {}
	return <div className='home_container'>
		<Logo />
		<div className='main_container'>
			<div className='body_container'>
				<HeaderInfo metadata={metadata} />
				<div className='container-fluid '>
					<div className='row'>
						{cards?.map((item, index) => {
							if (item.template === CARD_TYPES.SIMPLE_CARD) {
								return <StatisticsCard {...item} key={index} />
							}else if(item.template === CARD_TYPES.INSIGHT_CARD){
								return 	<IdeaIconCard {...item} key={index}/>
							}else if(item.template === CARD_TYPES.MAP_CARD){
								return 	<GoogleMapCard
									{...item}
									defaultZoom={10}
									defaultCenter={{ lat: -34.397, lng: 150.644 }}
									key={index}/>
							}
							return null
						})}
					</div>
					{/*<div className="row">*/}
					{/*	<GoogleMapCard defaultZoom={10} defaultCenter={{ lat: -34.397, lng: 150.644 }}/>*/}
					{/*</div>*/}
				</div>
			</div>
		</div>
		<div className='footer_container row mx-0 pt-3'>
			<span className='text-white text-center text-md-left d-inline-block footer_container_title'>
				Download now and join milions of useres
			</span>
			<div className='footer_images_container'>
				<img src={require('../../Images/app_store.png')} className='mr-1' alt='info' />
				<img src={require('../../Images/play_store.png')} className='ml-1' alt='info' />
			</div>
		</div>
	</div>
}

export default Home
