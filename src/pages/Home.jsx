import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menusection from '../components/Menusection';
import Menulist from '../components/Menulist';
import Menudrink from '../components/Menudrink';
import Contact from '../components/Contact';

const Home = () => {
    const [menus, setMenus] = useState([]);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await axios.get('https://deepnet-soft-task-server.onrender.com/api/menus');
            setMenus(response.data);
            if (response.data.length > 0) {
                setActiveMenu(response.data[0]);
            }
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };

    const handleMenuChange = (menuId) => {
        const selectedMenu = menus.find(menu => menu._id === menuId);
        setActiveMenu(selectedMenu);
    };

    return (
        <>
            <Menusection />
            <Menulist 
                menus={menus} 
                activeMenu={activeMenu?._id} 
                onMenuChange={handleMenuChange}
            />
            <Menudrink selectedMenu={activeMenu} />
            <Contact />
        </>
    );
};

export default Home; 