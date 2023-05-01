import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks3 from '../components/navigation-links3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Ev Music</title>
        <meta property="og:title" content="Ev Music" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <img
          alt="logo"
          src="/playground_assets/music-logo.png"
          loading="lazy"
          className="home-image"
        />
        <div className="home-nav">
          <NavigationLinks3 rootClassName="navigation-links3-root-class-name8"></NavigationLinks3>
        </div>
        <div className="home-icon-group">
          <div className="home-container01">
            <a
              href="https://www.youtube.com/@_evmusic"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
              </svg>
            </a>
          </div>
          <div className="home-container02">
            <a
              href="https://www.instagram.com/_evmusic_/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon02">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
          <div className="home-container03">
            <a
              href="https://soundcloud.com/yearthree"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M891.96 514.204c-18.086 0-35.348 3.52-51.064 9.856-10.506-114.358-110.29-204.060-232-204.060-29.786 0-58.682 5.63-84.318 15.164-9.96 3.702-12.578 7.52-12.578 14.916v402.714c0 7.766 6.24 14.234 14.124 14.996 0.336 0.034 363.536 0.21 365.89 0.21 72.904 0 131.986-56.816 131.986-126.894s-59.134-126.902-132.040-126.902zM400 768h32l16-224.22-16-223.78h-32l-16 223.78zM304 768h-32l-16-162.75 16-157.25h32l16 160zM144 768h32l16-128-16-128h-32l-16 128zM16 704h32l16-64-16-64h-32l-16 64z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon06">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container04">
              <img
                alt="Logo"
                src="/playground_assets/music-logo.png"
                loading="lazy"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-nav2">
              <div className="home-container05">
                <span className="home-text">Home</span>
              </div>
              <div className="home-container06">
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-dropdown-toggle"
                  >
                    <span className="home-text01">Albums</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="home-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-days-to-grow"
                        >
                          Days to Grow
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/loner?si=a12af9a8e6d94534a546335b2de5e996&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-loner"
                        >
                          Loner EP
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle3"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/lost-valentine?si=e6c2046aa8634b539adda2b4ad48272b&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-loner1"
                        >
                          Lost Valentine
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown3 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle4"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/mom-3-16-album?si=86c42737389a43669d304298323bf524&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-mom"
                        >
                          Mom 3:16
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown4 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle5"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/recover-now-or-never?utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-recover"
                        >
                          Recover Now or Never
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown5 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle6"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon12">
                          <path d="M874 598v-214h-52v192h-48v-150h-54v150h-48v-192h-54v214q0 18 13 30t31 12h170q18 0 30-12t12-30zM576 438v-54h-170v256h170v-54h-106v-46h106v-54h-106v-48h106zM362 640v-256h-52v150l-108-150h-52v256h52v-150l110 150h50zM854 170q36 0 60 25t24 61v512q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-512q0-36 24-61t60-25h684z"></path>
                        </svg>
                        <a
                          href="https://soundcloud.com/yearthree/sets/weird-state?si=ea2bad563c9f4eff9ab1285f4d78e394&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-weird-state"
                        >
                          Weird State
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown6 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle7"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/when-the-wind-blows-album?si=ae6495e32fdf44c6aa72beaed9bf4b10&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-when-the-wind-blows"
                        >
                          When the Wind Blows
                        </a>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown7 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle8"
                      >
                        <a
                          href="https://soundcloud.com/yearthree/sets/year-three?si=d0e622465a7a4d0aa9a759bef663a6f4&amp;utm_source=clipboard&amp;utm_medium=text&amp;utm_campaign=social_sharing"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="home-year-3"
                        >
                          Year Three
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="home-container07">
                <a
                  href="http://djevmusic.com"
                  font-size="1rem"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  DJ Ev
                </a>
              </div>
              <div className="home-container08">
                <Link to="/merch" font-size="1rem" className="home-navlink">
                  Merch
                </Link>
              </div>
              <div className="home-container09">
                <a
                  href="https://linktr.ee/evdmusic"
                  font-size="1rem"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  Listen
                </a>
              </div>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon18">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero vignette content">
        <h1 className="home-text02">
          <span className="home-text03">“Weird State”</span>
          <br></br>
        </h1>
        <span className="home-text05">
          <span>
            This album is an ambient electronic story about a man, an
            interaction with aliens, and his family.
          </span>
          <br></br>
        </span>
        <div className="home-btn-group">
          <a
            href="https://open.spotify.com/artist/5hTbr7Q7inWI4pYOcOPsH0/discography"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5 button"
          >
            <span className="home-text08">
              <span className="home-text09">Stream Now</span>
              <br></br>
            </span>
          </a>
        </div>
      </div>
      <iframe
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1513660456&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        allow="autoplay"
        scrolling="no"
        frameborder="no"
        className="home-iframe"
      ></iframe>
    </div>
  )
}

export default Home
