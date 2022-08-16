import { IconUser } from '@tabler/icons';
import React, { useState } from 'react';
import logo from "../img/branding.png";

export const FriendsLike = (props) => {

    if (!props) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            <div className="post-img flex flex-wrap items-center">
                <IconUser className="user-img" />
                <h4>User Name</h4>
                <div className="like-post text-right grow"><img src={logo} height="45" width="50" className="mr-0" /></div>
            </div>
        )
    }
}