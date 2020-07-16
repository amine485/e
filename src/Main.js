import React from 'react';
import './Main.css'
import ProfilePhoto from "./profile/ProfilePhoto"
import FullName from './profile/FullName'
import Address from './profile/Address';
function Main() {
return (
<div class="body" >
 {ProfilePhoto()}
{FullName()}
{Address()}
    </div>
  );
}

export default Main;
