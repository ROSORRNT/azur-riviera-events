import React from "react"
import styled from "styled-components"
const Title = ({ title, subtitle, middle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span style={{ color: "#ffcb3cee" }}>{middle}</span>

        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 0.8rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--lightBlue);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
