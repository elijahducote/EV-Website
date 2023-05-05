import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks31 from '../components/navigation-links31'
import './merch.css'

const Merch = (props) => {
  return (
    <div className="merch-container">
      <Helmet>
        <title>Merch - Ev Music</title>
        <meta property="og:title" content="Merch - Ev Music" />
      </Helmet>
      <header data-role="Header" className="merch-header">
        <img
          alt="logo"
          src="/playground_assets/music-logo.png"
          loading="lazy"
          className="merch-image"
        />
        <div className="merch-nav">
          <NavigationLinks31 rootClassName="navigation-links31-root-class-name"></NavigationLinks31>
        </div>
        <div className="merch-icon-group">
          <div className="merch-row">
            <a
              href="https://soundcloud.com/yearthree"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="merch-icon">
                <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
              </svg>
            </a>
          </div>
          <div className="merch-row1">
            <a
              href="https://www.instagram.com/_evmusic_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="merch-icon02"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="merch-row2">
            <a
              href="https://www.youtube.com/@_evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="merch-icon04">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-role="BurgerMenu" className="merch-burger-menu">
          <svg viewBox="0 0 1024 1024" className="merch-icon06">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="merch-mobile-menu">
          <div className="merch-nav1">
            <div className="merch-container01">
              <img
                alt="Logo"
                src="/playground_assets/music-logo.png"
                loading="lazy"
                className="merch-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="merch-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="merch-icon08">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="merch-nav2">
              <div className="merch-container02">
                <span className="merch-text">Home</span>
              </div>
              <div className="merch-container03">
                <div
                  data-thq="thq-dropdown"
                  className="merch-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="merch-dropdown-toggle"
                  >
                    <span className="merch-text1">Albums</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="merch-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="merch-icon10">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="merch-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle01"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/recover-now-or-never?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-recover"
                        >
                          Recover Now or Never
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle02"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/when-the-wind-blows-album?si=ae6495e32fdf44c6aa72beaed9bf4b10&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-when-the-wind-blows"
                        >
                          When the Wind Blows
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle03"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/mom-3-16-album?si=86c42737389a43669d304298323bf524&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-mom"
                        >
                          Mom 3:16
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown3 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle04"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/year-three?si=d0e622465a7a4d0aa9a759bef663a6f4&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-year-3"
                        >
                          Year Three
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown4 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle05"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/lost-valentine?si=e6c2046aa8634b539adda2b4ad48272b&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-never-mine"
                        >
                          Lost Valentine
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown5 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle06"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-days-to-grow"
                        >
                          Days to Grow
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown6 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle07"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/loner?si=a12af9a8e6d94534a546335b2de5e996&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-loner"
                        >
                          Loner EP
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown7 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle08"
                      >
                        <svg viewBox="0 0 1024 1024" className="merch-icon12">
                          <path d="M874 598v-214h-52v192h-48v-150h-54v150h-48v-192h-54v214q0 18 13 30t31 12h170q18 0 30-12t12-30zM576 438v-54h-170v256h170v-54h-106v-46h106v-54h-106v-48h106zM362 640v-256h-52v150l-108-150h-52v256h52v-150l110 150h50zM854 170q36 0 60 25t24 61v512q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-512q0-36 24-61t60-25h684z"></path>
                        </svg>
                        <a
                          href="https://soundcloud.com/yearthree/sets/weird-state?si=ea2bad563c9f4eff9ab1285f4d78e394&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-weird-state"
                        >
                          Weird State
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="merch-dropdown8 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="merch-dropdown-toggle09"
                      >
                        <svg viewBox="0 0 1024 1024" className="merch-icon14">
                          <path d="M874 598v-214h-52v192h-48v-150h-54v150h-48v-192h-54v214q0 18 13 30t31 12h170q18 0 30-12t12-30zM576 438v-54h-170v256h170v-54h-106v-46h106v-54h-106v-48h106zM362 640v-256h-52v150l-108-150h-52v256h52v-150l110 150h50zM854 170q36 0 60 25t24 61v512q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-512q0-36 24-61t60-25h684z"></path>
                        </svg>
                        <a
                          href="https://soundcloud.com/yearthree/sets/trance-being"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="merch-trance-being"
                        >
                          Trance Being
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="merch-container04">
                <a
                  href="http://djevmusic.com"
                  font-size="1rem"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="merch-link3"
                >
                  DJ Ev
                </a>
              </div>
              <div className="merch-container05">
                <Link to="/merch" font-size="1rem" className="merch-navlink">
                  Merch
                </Link>
              </div>
              <div className="merch-container06">
                <a
                  href="https://linktr.ee/evdmusic"
                  font-size="1rem"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="merch-link4"
                >
                  Listen
                </a>
              </div>
            </nav>
          </div>
          <div className="merch-icon-group1">
            <div className="merch-container07">
              <a
                href="https://soundcloud.com/yearthree"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="merch-icon16">
                  <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
                </svg>
              </a>
            </div>
            <div className="merch-container08">
              <a
                href="https://www.instagram.com/_evmusic_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="merch-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@_evmusic"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 1024 1024" className="merch-icon20">
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="merch-code-embed">
        <DangerousHTML
          html={`<div id="shop">
</div>

<script>
    var spread_shop_config = {
        shopName: 'evdmusic',
        locale: 'us_US',
        prefix: 'https://evdmusic.myspreadshop.com',
        baseId: 'shop'
    };
window.onload();
</script>

<script type="text/javascript"
        src="https://evdmusic.myspreadshop.com/shopfiles/shopclient/shopclient.nocache.js">
window.onload();
</script>
<script>
var base;
window.onload = function get_body() {
base = document.getElementsByTagName('body')[0];
if (base.getAttribute('id') == null) {
base.firstElementChild.remove();
}}
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Merch
