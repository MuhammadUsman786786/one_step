import React from 'react'


const Logo = () => {
	return <div className='d-flex py-3 justify-content-center'>
		<img src={require('../../Images/logo.png')} className='logo_style' alt='logo' />
	</div>
}

export default Logo