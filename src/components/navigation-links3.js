import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links3.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={`navigation-links3-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links3-navlink">
        {props.text5}
      </Link>
      <div
        data-thq="thq-dropdown"
        className="navigation-links3-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links3-dropdown-toggle"
        >
          <span className="navigation-links3-text">Albums</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links3-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links3-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>

      </div>
      <a
        href="http://djevmusic.com"
        font-size="1rem"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links3-link"
      >
        {props.text21}
      </a>
      <Link to="/merch" font-size="1rem" className="navigation-links3-navlink1">
        {props.text31}
      </Link>
      <a
        href="https://linktr.ee/evdmusic"
        font-size="1rem"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links3-link1"
      >
        {props.text41}
      </a>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text321111211: 'Star',
  text21: 'DJ Ev',
  link_text211111:
    'https://soundcloud.com/yearthree/sets/when-the-wind-blows-album?si=ae6495e32fdf44c6aa72beaed9bf4b10&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32111111: 'Year Three',
  link_text21111211: 'https://soundcloud.com/yearthree/sets/star',
  text3211: 'Mom 3:16',
  text321: 'Lost Valentine',
  text41: 'Listen',
  link_text2:
    'https://soundcloud.com/yearthree/sets/loner?si=a12af9a8e6d94534a546335b2de5e996&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  rootClassName: '',
  text321111: 'Weird State',
  text31: 'Merch',
  link_text2111:
    'https://soundcloud.com/yearthree/sets/recover-now-or-never?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  link_text2111121: 'https://soundcloud.com/yearthree/sets/star',
  link_text21:
    'https://soundcloud.com/yearthree/sets/lost-valentine?si=e6c2046aa8634b539adda2b4ad48272b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  link_text:
    'https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text3211112: 'Trance Being',
  text3211111: 'When the Wind Blows',
  link_text211:
    'https://soundcloud.com/yearthree/sets/mom-3-16-album?si=86c42737389a43669d304298323bf524&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32: 'Loner EP',
  link_text2111111:
    'https://soundcloud.com/yearthree/sets/year-three?si=d0e622465a7a4d0aa9a759bef663a6f4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32111: 'Recover Now or Never',
  link_text211112: 'https://soundcloud.com/yearthree/sets/trance-being',
  text3: 'Days to Grow',
  text32111121: 'Star',
  link_text21111:
    'https://soundcloud.com/yearthree/sets/weird-state?si=ea2bad563c9f4eff9ab1285f4d78e394&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text5: 'Home',
  link_text1:
    'https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
}

NavigationLinks3.propTypes = {
  text321111211: PropTypes.string,
  text21: PropTypes.string,
  link_text211111: PropTypes.string,
  text32111111: PropTypes.string,
  link_text21111211: PropTypes.string,
  text3211: PropTypes.string,
  text321: PropTypes.string,
  text41: PropTypes.string,
  link_text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text321111: PropTypes.string,
  text31: PropTypes.string,
  link_text2111: PropTypes.string,
  link_text2111121: PropTypes.string,
  link_text21: PropTypes.string,
  link_text: PropTypes.string,
  text3211112: PropTypes.string,
  text3211111: PropTypes.string,
  link_text211: PropTypes.string,
  text32: PropTypes.string,
  link_text2111111: PropTypes.string,
  text32111: PropTypes.string,
  link_text211112: PropTypes.string,
  text3: PropTypes.string,
  text32111121: PropTypes.string,
  link_text21111: PropTypes.string,
  text5: PropTypes.string,
  link_text1: PropTypes.string,
}

export default NavigationLinks3
