import React from 'react';
import auth from '../firebase.init';
import Menu from '../Menu/Menu';

const UpdateProfile = () => {



    const user = auth.currentUser;
        const displayName = user.displayName;


    return (
        <div className='home-container'>
            <Menu></Menu>


            <div className='home'>
                <h2>Welcome to your profile {displayName}</h2>
            </div>
        </div>
    );
};

export default UpdateProfile;