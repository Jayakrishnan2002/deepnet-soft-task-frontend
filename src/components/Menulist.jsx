import React from 'react';
import './menulist.css';
import menubg from '../assets/menulist_bg.png';

const Menulist = ({ menus, activeMenu, onMenuChange }) => {
    return (
        <div className='menulist_container'>
            <div className="menulist_bg" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url(${menubg})` }}>
                {menus.map((menu) => (
                    <div
                        key={menu._id}
                        className={`list${activeMenu === menu._id ? '2' : '1'}`}
                        onClick={() => onMenuChange(menu._id)}
                    >
                        {menu.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menulist;
