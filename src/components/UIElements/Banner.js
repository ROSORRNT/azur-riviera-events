import React from "react"

import "./Banner.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
