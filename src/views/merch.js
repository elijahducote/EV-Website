import React from 'react'

import { Helmet } from 'react-helmet'

import './merch.css'

const Merch = (props) => {
  return (
    <div className="merch-container">
      <Helmet>
        <title>Merch - Ev Music</title>
        <meta property="og:title" content="Merch - Ev Music" />
      </Helmet>
    </div>
  )
}

export default Merch
