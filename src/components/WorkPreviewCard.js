import React, { useState } from 'react'
import { Link } from 'gatsby'

const WorkPreviewCard = props => {
  return (
    <li
      className={
        'work-preview' +
        (props.activeHover === null
          ? ''
          : props.activeHover === props.id
          ? ''
          : ' slide-anim')
      }
      onMouseEnter={() => props.setActiveHover(props.id)}
      onMouseLeave={() => props.setReset()}
    >
      <Link to="">
        <h4>Apprenticeships.me</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Netlify</li>
        </ul>
      </Link>
    </li>
  )
}

export default WorkPreviewCard

// There is a resting state where all items are left aligned.Link

// On hover,
