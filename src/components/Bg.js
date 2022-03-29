import React from 'react'
import bgimg from './images/bg.png';

export default function bg() {
  return (
    <div style={{ backgroundImage: `url(${bgimg})`,  position: "fixed",
    width: "100vw",
    height: "60vh",
    left: "0px",
    top: "325px",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover"
     }}>
      
    </div>
  )
}
