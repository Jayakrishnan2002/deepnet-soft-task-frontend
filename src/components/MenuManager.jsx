import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MenuManager.css';

const MenuManager = () => {
    const [menus, setMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [newMenu, setNewMenu] = useState({ name: '', description: '' });
    const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });
    const [isAddingMenu, setIsAddingMenu] = useState(false);
    const [isAddingItem, setIsAddingItem] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingMenu, setEditingMenu] = useState(null);
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/menus');
            setMenus(response.data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };

    const handleCreateMenu = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/menus', newMenu);
            setNewMenu({ name: '', description: '' });
            setIsAddingMenu(false);
            fetchMenus();
        } catch (error) {
            console.error('Error creating menu:', error);
        }
    };

    const handleCreateItem = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/api/menus/${selectedMenu._id}/items`, newItem);
            setNewItem({ name: '', description: '', price: '' });
            setIsAddingItem(false);
            fetchMenus();
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setIsAddingItem(false);
    };

    const handleDeleteMenu = async (menuId) => {
        if (window.confirm('Are you sure you want to delete this menu?')) {
            try {
                await axios.delete(`http://localhost:5000/api/menus/${menuId}`);
                fetchMenus();
                setSelectedMenu(null);
            } catch (error) {
                console.error('Error deleting menu:', error);
            }
        }
    };

    const handleEditMenu = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/menus/${editingMenu._id}`, {
                name: editingMenu.name,
                description: editingMenu.description
            });
            setIsEditing(false);
            setEditingMenu(null);
            fetchMenus();
        } catch (error) {
            console.error('Error updating menu:', error);
        }
    };

    const startEditing = (menu) => {
        setIsEditing(true);
        setEditingMenu({ ...menu });
    };

    return (
        <div className="menu-manager">
            <div className="menu-sidebar">
                <h2>Menus</h2>
                <button 
                    className="add-menu-btn"
                    onClick={() => setIsAddingMenu(true)}
                >
                    Add New Menu
                </button>
                <div className="menu-list">
                    {menus.map(menu => (
                        <div key={menu._id} className="menu-item-wrapper">
                            <div 
                                className={`menu-item ${selectedMenu?._id === menu._id ? 'selected' : ''}`}
                                onClick={() => handleMenuClick(menu)}
                            >
                                {menu.name}
                            </div>
                            <div className="menu-actions">
                                <button onClick={() => startEditing(menu)}>Edit</button>
                                <button onClick={() => handleDeleteMenu(menu._id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-content">
                {isAddingMenu ? (
                    <form onSubmit={handleCreateMenu} className="menu-form">
                        <h3>Create New Menu</h3>
                        <input
                            type="text"
                            placeholder="Menu Name"
                            value={newMenu.name}
                            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
                        />
                        <textarea
                            placeholder="Menu Description"
                            value={newMenu.description}
                            onChange={(e) => setNewMenu({ ...newMenu, description: e.target.value })}
                        />
                        <button type="submit">Create Menu</button>
                        <button type="button" onClick={() => setIsAddingMenu(false)}>Cancel</button>
                    </form>
                ) : isEditing ? (
                    <form onSubmit={handleEditMenu} className="menu-form">
                        <h3>Edit Menu</h3>
                        <input
                            type="text"
                            value={editingMenu.name}
                            onChange={(e) => setEditingMenu({ ...editingMenu, name: e.target.value })}
                        />
                        <textarea
                            value={editingMenu.description}
                            onChange={(e) => setEditingMenu({ ...editingMenu, description: e.target.value })}
                        />
                        <button type="submit">Save Changes</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                ) : selectedMenu ? (
                    <div className="selected-menu">
                        <h2>{selectedMenu.name}</h2>
                        <p>{selectedMenu.description}</p>
                        <button 
                            className="add-item-btn"
                            onClick={() => setIsAddingItem(true)}
                        >
                            Add New Item
                        </button>
                        
                        {isAddingItem ? (
                            <form onSubmit={handleCreateItem} className="item-form">
                                <h3>Add New Item</h3>
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    value={newItem.name}
                                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                />
                                <textarea
                                    placeholder="Item Description"
                                    value={newItem.description}
                                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={newItem.price}
                                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                                />
                                <button type="submit">Add Item</button>
                                <button type="button" onClick={() => setIsAddingItem(false)}>Cancel</button>
                            </form>
                        ) : (
                            <div className="items-list">
                                {selectedMenu.items.map((item, index) => (
                                    <div key={index} className="menu-item-card">
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p className="price">${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="no-menu-selected">
                        <h2>Select a menu or create a new one</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuManager; 