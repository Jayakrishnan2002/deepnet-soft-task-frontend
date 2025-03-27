import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        © 2024 Deepnetsoft Solutions. All rights reserved
      </div>

      {/* New text for mobile screens */}
      <div className='footer1-mobile'>
        © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions
      </div>

      <div className='footer2'>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  )
}

export default Footer
