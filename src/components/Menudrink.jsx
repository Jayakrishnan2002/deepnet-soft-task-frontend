import React from 'react';
import './menudrink.css';
import menudrink_bg from '../assets/menudrink_bg.png';
import frame1 from '../assets/Frame (1).png';
import frame2 from '../assets/Frame (2).png';
import drink1 from '../assets/drinks1.png';
import drink2 from '../assets/drink2.png';

const Menudrink = ({ selectedMenu }) => {
    return (
        <div className='menudrink_container' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${menudrink_bg})`}}>
            <img className='frame1' src={frame1} alt="" />
            <div className='menudrink_content'>
                <div className="heading">
                    <span><hr /></span>
                    {selectedMenu?.name || 'Loading...'}
                    <span><hr /></span>
                </div>
                <div className="items">
                    {selectedMenu?.items?.map((item, index) => (
                        <div key={index} className="items1">
                            <span>{item.name}......................${item.price}</span><br />
                            {item.description}
                        </div>
                    ))}
                </div>
                <div className='drink1'><img src={drink1} alt="" /></div>
                <div className='drink2'><img src={drink2} alt="" /></div>
            </div>
            <img className='frame2' src={frame2} alt="" />
        </div>
    );
};

export default Menudrink;
