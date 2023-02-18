import './banner.css'
import React from 'react'

function banner(props) {
  let data = props.data
  return (
    <div>
      <div className="row">
        {data.map((name, index) => (
          <div className="card">
            <img height={220} src="../../kgf-poster.jfif" alt="not availbale" />
            <h4>{index}{name}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default banner