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
      <div className="merch-code-embed">
        <DangerousHTML
          html={`<div id="shop">
<div id="border">
  <center>

    <div id="ps1">

      <div class="squ1"></div>

      <div class="squ2"></div>

    </div>
    <div id="ps2">

      <div class="squ3"></div>

      <div class="squ4"></div>

    </div>
  </center>
</div>

<div id="pd"><a href="#">Load</a></div>

<br/><br/>

<div="bd">
<div class="spinner"></div>
<span id="text"><p>Loading page elements...</p></span>
</div>
</div>

<style>

  #border {

    padding: 2%;
    box-shadow: inset 0 0 2rem 2rem rgba(0, 0, 0, 0.01);
    box-shadow: 0 0 2rem 2rem rgba(0, 0, 0, 0.01);
    background-color:rgba(0, 0, 0, 0.03);
    max-width:100vw

  }
   
  #ps1 {

    opacity: 0.4;
    padding-top: 8%;

  }
  
  .squ1 {

    position: relative;
    background-color: rgb(255, 205, 46);
    width: 1rem;
    height: 1.1rem;
    bottom: .15rem;
    animation: var2 2.3s forwards infinite; 
    animation-direction: alternate;

  }

  .squ2 {

    position: relative;
    background-color: rgb(145, 195, 0);
    width: 1rem;
    height: 1.1rem;
    left: 1.45rem;
    bottom: 1.25rem;
    animation: rt 2s forwards infinite; 
    animation-direction: alternate;

  }


  #ps2 {

    opacity: 0.4;

  }

  .squ3 {

    position: relative;
    background-color: rgb(0, 180, 241);
    width: 1rem;
    height: 1.1rem;
    top: -.4rem;
    animation: var 1.9s forwards infinite; 
    animation-direction: alternate;
   
  }

  .squ4 {

    position: relative;
    background-color: rgb(248, 104, 44);
    width: 1rem;
    height: 1.1rem;
    top: -1.5rem;
    left: 1.45rem;
    animation: var2 2.2s forwards infinite; 
    animation-direction: alternate;

  }

  a:link {

    font-family: sans-serif;
    position: relative;
    left: 0.6975rem;
    bottom: 3.4545rem;
    text-decoration: none;
    font-size: 1rem;
    color: #000000;
    letter-spacing: 0.01rem;

  }
  
  .spinner {
    position:relative;
    opacity: 0.4;
	bottom:1.38rem;
    width: 1rem;
	display:inline-block;
    height: 1.15rem;
    border-radius: 100%;
    border-style: solid;
    border-width: 0 -.05rem 1.5rem 1.5rem;
    border-color: transparent transparent #000000 transparent;
    animation: rt 700ms forwards infinite;

  }

  #text {

    position: relative;
    font-family: Inter, sans-serif;
    display:inline-block;
    top: -1.7rem;
	max-width:100vw;

  }


  #ps1, #ps2, #pd { animation: ani 2s forwards infinite; animation-direction: alternate; }
  
  @keyframes ani {

    0% {

      -webkit-transform: rotate(0deg);

    }

    100% {

      -webkit-transform: rotate(10deg);

    }

  }

  
  @keyframes rt {

    0% {

      -webkit-transform: rotate(0deg);

    }

    100% {

      -webkit-transform: rotate(360deg);

    }

  }

    
  @keyframes var {

    0% {

      -webkit-transform: rotate(0deg);

    }

    45% {

      -webkit-transform: rotate(180deg);

    }

    100% {

      -webkit-transform: rotate(360deg);

    }

  }


    
  @keyframes var2 {

    0% {

      -webkit-transform: rotate(0deg);

    }

    35% {

      -webkit-transform: rotate(100deg);

    }

    100% {

      -webkit-transform: rotate(360deg);

    }

  }

    
  @keyframes var3 {

    0% {

      -webkit-transform: rotate(0deg);

    }

    25% {

      -webkit-transform: rotate(100deg);

    }


    35% {

      -webkit-transform: rotate(180deg);

    }

    100% {

      -webkit-transform: rotate(360deg);

    }
    }

  }

</style>

<script>
    var spread_shop_config = {
        shopName: 'evdmusic',
        locale: 'us_US',
        prefix: 'https://evdmusic.myspreadshop.com',
        baseId: 'shop'
    };
</script>

<script type="text/javascript"
        src="https://evdmusic.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js">
        var div = document.getElementByTagName("div").firstChild;
        div.remove();
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Merch
