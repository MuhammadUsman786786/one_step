import React from 'react'
import { EXTERNAL_LINKS } from '../../Utilities/constants'

const StoreLogos = () => {

  const onClick = (key = '') => {
    window.open(EXTERNAL_LINKS[key], '_blank')
  }

  return <div className="store-logos mt-4">
    <img src={require('../../Images/google-store.jpg')} alt="google-play-store" onClick={() => onClick('GOOGLE')} />
    <img src={require('../../Images/apple-store.jpg')} alt="google-play-store" onClick={() => onClick('APPLE')} />
  </div>
}

export default StoreLogos