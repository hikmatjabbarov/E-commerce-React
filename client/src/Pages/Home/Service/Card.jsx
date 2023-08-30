import React from 'react'

const Card = ({src,title,text}) => {
  return (
    <div className='service-card'>
        <img src={src} alt="service" />
        <h6 className="title">{title}</h6>
        <p className="text">{text}</p>
    </div>
  )
}

export default Card