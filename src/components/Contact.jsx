import React from 'react'
import './contact.css'
import telephone_logo from '../assets/bytesize_telephone.png'
import email_icon from '../assets/formkit_email.png'
import logoicon from '../assets/original Logo main.png'
import facebook from '../assets/iconoir_facebook.png'
import twitter from '../assets/basil_twitter-outline.png'
import youtube from '../assets/mingcute_youtube-line.png'
import instagram from '../assets/insta.png'
import location from '../assets/location.png'

const Contact = () => {
  return (
    <div className='contact_container'>
      <div className="box">
        <span className='s1'>CONNECT WITH US</span>
        <span className='s2'><span><img src={telephone_logo} alt="" /></span>+91 9567843340</span>
        <span className='s2'><span><img src={email_icon} alt="" /></span>info@deepnetsoft.com</span>
      </div>
      <div className="box">
        <div className='span_div'>
        <span className='span1'>DEEP</span>
        <span className='span2'>NET</span>
        <span className='span3'>SOFT</span>
        </div>
        <div className='social_icon'>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
        </div>
        <div className='icon'><img src={logoicon} alt="" /></div>
      </div>
      <div className="box">
      <span className='s1'>FIND US</span>
      <span className='s2 span_location'><span><img src={location} alt="" /></span>First floor, Geo infopark, <br /><span className='spantext'>Infopark EXPY, Kakkanad</span></span>
      </div>
    </div>
  )
}

export default Contact
