import { IconUser } from '@tabler/icons';
import React, { useState } from 'react';
import logo from "../img/branding.png";
import { Link } from "react-router-dom";

export const FriendsComment = (props) => {

    if (!props) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            <div className="post-img flex flex-wrap items-center">
                <Link to={{
                    pathname: '/profile/'
                }}>  <IconUser className="user-img" /></Link>
                <h4>User Name</h4>
                <div className="like-post text-right grow"><img src={logo} height="45" width="50" alt={""} className="mr-0" /></div>
            </div>
        )
    }
}