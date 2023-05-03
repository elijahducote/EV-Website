import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './merch.css'

const Merch = (props) => {
  return (
    <div className="merch-container">
      <Helmet>
        <title>Merch - Ev Music</title>
        <meta property="og:title" content="Merch - Ev Music" />
      </Helmet>
      <div className="merch-div">
        <DangerousHTML
          html={`<div id="myShop">
    <a href="https://evdmusic.myspreadshop.com">evdmusic</a>
</div>

<script>
    var spread_shop_config = {
        shopName: 'evdmusic',
        locale: 'us_US',
        prefix: 'https://evdmusic.myspreadshop.com',
        baseId: 'myShop'
    };
</script>

<script type="text/javascript"
        src="https://evdmusic.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js">
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Merch
