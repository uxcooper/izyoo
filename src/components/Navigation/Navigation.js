import React from 'react';
import user from './user.jpg';
import './Navigation.css';

const Navigation = () => {
    return(
        <div>
            <span className="fontSize fa fa-bell" />
            <img className="imgBorder" src={user} alt="user" height="100" />
        </div>
    )
}

export default Navigation;