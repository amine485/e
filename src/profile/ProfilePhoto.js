import React from 'react'
import myp from'../images/im.jpg'
import './ProfilePhoto.css';



function ProfilePhoto() {
    return (
        <div>
                <img className ="images" src={myp}/>
        </div>
    )
}

export default ProfilePhoto
