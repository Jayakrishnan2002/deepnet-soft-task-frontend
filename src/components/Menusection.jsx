import React from 'react'
import './menusection.css'
import menu_img from '../assets/Menu_pic.jpeg'

const Menusection = () => {
  return (
    <div className='menu_container'>
      <div className='menu_img' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${menu_img})`}}>
        <div className='m1'>MENU</div>
        <div className='m2'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br />place an order, use the "Order Online" button located below the menu.</div>
      </div>
    </div>
  )
}

export default Menusection
