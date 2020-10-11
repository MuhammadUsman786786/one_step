import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { CustomGoogleMap, Logo, HeaderInfo, StatisticsCard, StoreLogos } from '../../Components'
import { Splash } from '..'
import { SAMPLE_DATA_URL, INSIGHT } from '../../Utilities/constants'

const Home = (props) => {

	const [showSplash, setSplash] = useState(true)
	const [response, setResponse] = useState({})
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			fetch(SAMPLE_DATA_URL, {
				headers: {
					'Content-Type': 'application/json',
				}
			})
				.then(res => res.json())
				.then((result) => {
					setResponse(result)
					setSplash(false)
				},
					({ message = '' }) => {
						setError(message)
					}
				)
		}, 1000)
	}, [])


	if (error) {
		toast.error(error)
	}

	if (showSplash) {
		return <Splash />
	}

	return <div className='home_container'>
		<Logo />
		<div className='divider_style' />
		<div className='body_container'>
			<HeaderInfo
				time={response?.summary?.seconds}
				steps={response?.summary?.steps}
			/>
			<div className='px-3'>
				{response?.summary?.cards?.map((item, index) => {
					return <StatisticsCard
						key={`${item?.title}-${index}`}
						{...item}
						index={index}
					/>
				})}
				<StatisticsCard
					icon={require('../../Images/idea.png')}
					title={INSIGHT.TITLE}
					description={INSIGHT.DESCRIPTION}
				/>
				<CustomGoogleMap
					defaultCenter={{ lat: 33.684422, lng: 73.047882 }}
					defaultZoom={10}
				>
					{/* pass markers|directions|clusters as children */}
				</CustomGoogleMap>
			</div>
			<StoreLogos />
		</div>
	</div>
}

export default Home
