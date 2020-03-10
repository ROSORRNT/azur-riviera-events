import React from "react"

import "./Banner.css"

const Banner = ({ color, title, info, children }) => {
  return (
    <div className="banner">
      <h1
        style={{
          color: color || "white",
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "2rem",
          color: "var(--fontColorDark)",
          textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
        }}
      >
        {info}
      </p>
      {children}
    </div>
  )
}

export default Banner
