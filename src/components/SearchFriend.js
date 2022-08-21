import "../index.css";
import React, { useState, useEffect } from 'react';
import { IconLoader2, IconUser } from '@tabler/icons';
import { Ajax } from "../utils/axios";
import { Link } from "react-router-dom";

export const SearchFriend = (props) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);
        Ajax.get('owners/' + props.user._id, null, function (response) {
            setUser(response);
            setLoading(false);
        });

    }, [setLoading]);

    if (loading || !user) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <>
                <Link className="searchFriend flex py-2" to={{
                    pathname: '/profile/' + user._id
                }}>  <IconUser className="user-img flex-none" /> <input label="Name" name="name" type="text" value={user.name + ' ' + user.surname} readOnly /></Link>
            </>
        )
    }
}