import React from 'react'
import './rainApp.css'
import RBXLogo from '../Images/rbx.png'
import RBXLogoname from '../Images/rbx-logo.png'

const rainApp = () => {
  const cardItems =[
    {id:1, cardName:'Card1', cardText:'RXB', cardSubText:'US$',cardButton:'999,999.00000',},
    {id:2, cardName:'Card2', cardText:'ETH', cardSubText:'US$',cardButton:'999,999.00000',},
  ]

  return (
    <div className='row'>
      <div className='appNav'>
        <div className='img-container'>
          <img src={RBXLogoname}/>
          </div>
          <div className='top-button'>
            <button className='conWallet'>CONNECT WALLET</button>
            <button className='conMainnet'>MAINNET</button>

          </div>
          <div className='darkMode'>
          <button className='iconButton'><img src='' alt=''/></button>
        </div>
      </div>
      <div className='rowInner'>
      <table>
      <tr>
        <td className ='a'>
        <div>
            { cardItems && cardItems.map((cardItem)=>
            <div className='tableA'>
              <div className='card-container'>
                <div className='boxHeaders'>
                  <div className='boxHeader1'>{cardItem.cardText}</div>
                  <div className='boxHeader2'>{cardItem.cardSubText}</div>
              </div >
              <div className='normButton-container'><button className='normButton'>{cardItem.cardButton}</button></div>
              </div>
            </div>
            )
            }
        </div>
        </td>
        <td className ='b'>
          <tr>
            <td colSpan={3}>
              <div className='topHeight'>
                <div className='testAlign'>
                  <span className='red'>R</span>
                  <span className='orange'>A</span>
                  <span className='yellow'>I</span>
                  <span className='green'>N</span>
                  <span className='blue'>B</span>
                  <span className='purple'>O</span>
                  <span className='violet'>W</span>
                </div>
                <img src={RBXLogo} alt='RBXLogo'/>
                <div className='testAlign'>
                  <div>DASHBOARD</div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className='d'>
              <div className='roundButton'>
                <button className='innerButton'>999,999,999,999</button>
              </div>
            </td>
            <td className='d'>
              <div className='roundButton'>
                <button className='innerButton'>999,999,999,999</button>
              </div>
            </td>
            <td className='d'>
              <div className='roundButton'>
                <button className='innerButton'>999,999,999,999</button>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div className='midHeight'>
                <button className='lowerButton'>999,999,999,999.00000</button>
                <button className='lowerButton2'>MAX</button>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <div className='midHeight'>
                <button className='lowerButton3'>ENABLE</button>
              </div>
            </td>
          </tr>
        </td>
          <td className ='c'>
            <div className='roundButton2'>
              <button className='innerButton'>999,999,999,999</button>
            </div>
          </td>
      </tr>
      </table>   
      </div> 
    </div>
  )
}

export default rainApp