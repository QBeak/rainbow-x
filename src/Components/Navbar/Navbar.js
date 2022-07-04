import React from 'react'
import './Navbar.css'
import companyLogo from '../Images/rbx-logo.png'
// import { useMediaQuery } from 'react-responsive'; /*this has not been implemented yet*/
import { Link } from 'react-router-dom'

const Navbar = () => {
  //   const [isMobile, setIsMobile] = useState(false);

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });
  return (
    <div className='header'>

      <nav className='navbar'>
      <div className='img-div'>
        <Link to='/'><img src={companyLogo} alt='Rainbow-X'></img></Link>
      </div>
        <div className= 'navbar-nav'>
        {/* {isMobile?'nav-link-mobile':'navbar-nav'} */}
        <ul className='ul-style'>
            <li>Acula</li>
            <li>Karura</li>
            <li>rUSD</li>
            <li>Ecosystem</li>
            <li>Resources</li>
            <li>Learn</li>
        </ul>
        </div>
        <div className='navButton'><Link to='/rainbowApp'><button >APPS</button></Link></div>
          <button className='mobile-menu-icon'>
          {/* {isMobile? (<i className='fas fas-time'></i>):(<i className='fas fa-bar'></i>)} */}
        </button>
        </nav>
    </div>
  )
}

export default Navbar