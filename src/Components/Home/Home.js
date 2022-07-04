// import React, { useState } from 'react'
import './Home.css'
import '../Navbar/Navbar'
import CompanyLogo from '../Images/rbx-logo-unscreen.gif'
import Navbar from '../Navbar/Navbar'
// import { useMediaQuery } from 'react-responsive';

const Home = () => {

  // const [isMobile, setIsMobile] = useState(false);

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
  const rainbowCards = [
    {id:1, cardName: 'Card1', cardHeader: 'Stable', cardContent: 'Pegged to one dollar.1 aUSD = 1 USD'},
    {id:2, cardName: 'Card2', cardHeader: 'Censorship-Resistant', cardContent: 'Backed only by decentralized assets in Collateralized Debt Positions (CDP).'},
    {id:3, cardName: 'Card3', cardHeader: 'gdfgdfdfgd', cardContent: 'fsdfjgdfgfdjghfdghkhgjdhgkdsghkjdfg'},
    {id:4, cardName: 'Card4', cardHeader: 'gdfgdfdfgd', cardContent: 'fsdfjgdfgfdjghfdghkhgjdhgkdsghkjdfg'},
    {id:4, cardName: 'Card5', cardHeader: 'gdfgdfdfgd', cardContent: 'fsdfjgdfgfdjghfdghkhgjdhgkdsghkjdfg'}
  ]
  return (
    <div className='hm-main'>
      <Navbar/>
        <div className='rainbow-1'>
            <div className='hm-con-text'>
              <div className='largeFont'>Rainbow X USD(rUSD)</div>
              <div className='mediumFont'>The native decentralized stablecoin of Polkadot.</div>
              <div className='buttonSet'>
                <button className='buttonStyle-gradient'>TALK TO OUR TEAM</button>
                <button className='buttonStyle'>READ OUR DOCS</button>
              </div>
            </div>
            <div className='hm-con-image'>
              <img src={CompanyLogo} alt='Rainbow X'></img>
            </div>
        </div>
        <div className='rainbow-2'>
          <div className='rain-2-header'>A decentralized, multi-collateral, crypto-backed stablecoin</div>
          <div className='cards'>
            {
              rainbowCards && rainbowCards.map((rainbowCard) =>
              <div className='card-content'>
                <p className='cardHeader'>{rainbowCard.cardHeader}</p>
                <p>{rainbowCard.cardContent}</p>
              </div>         
              )
            }
          </div>
        </div>
    </div>
  )
}

export default Home