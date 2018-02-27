import React from 'react';

const MenuDetail = ({name, icon}) => {
    return(
        <div className="w-20 bg-dark-gray white">
            <p><span className={"pa3 fa fa-" + icon }/>{name}</p>
        </div>
    );
}

export default MenuDetail;