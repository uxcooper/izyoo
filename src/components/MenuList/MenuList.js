import React from 'react';
import MenuDetail from '../MenuDetail/MenuDetail'

const MenuList = (props) => {
    return(
        <div>
            <MenuDetail icon="home" name="Home" />
            <MenuDetail icon="bell" name="Announcement" />
            <MenuDetail icon="briefcase" name="Out of office" />
            <MenuDetail icon="user" name="Profile" />
            <MenuDetail icon="list-ul" name="Employee List" />
            <MenuDetail icon="list-alt" name="User Menu" />
            <MenuDetail icon="cogs" name="Management" />
            <MenuDetail icon="plane" name="Holiday" />
        </div>
    );
}

export default MenuList;