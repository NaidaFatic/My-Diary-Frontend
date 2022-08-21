import { IconUser, IconExternalLink } from '@tabler/icons';
import React, { useState, useEffect } from 'react';
import { Ajax } from "../utils/axios";
import { Link } from "react-router-dom";

export const FriendLike = (props) => {
    const [isApproved, setIsApproved] = useState(false);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    // const date = props.user.updatedAt.split('T')[0]
    // const time = props.user.updatedAt.split('T')[1].split(':')[0] + ':' + props.comment.updatedAt.split('T')[1].split(':')[1]

    useEffect(() => {
        setLoading(true);
        Ajax.get('owners/' + props.user, null, function (response) {
            setUser(response);
            setLoading(false)
        });
        return () => {

        };
    }, [setLoading, setIsApproved]);


    console.log(user)
    if (!props.user || loading || !user) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            <>
                <div className="post-img flex flex-wrap items-center">
                    <Link to={{
                        pathname: '/profile/' + props.user
                    }}>  <IconUser className="user-img" /></Link>
                    <div>
                        <h4>{user.name} {user.surname}</h4>
                        {/* <small>{date} {time}</small> */}
                    </div>
                    <div className="like-post text-right grow flex justify-end items-center"><h4>{props.post.name}</h4>
                        {props.post.picture && <Link to={{ pathname: '/profile/' + props.post.ownerID }} state={{ modal: props.post._id }}><img src={props.post.picture} height="45" width="50" alt={""} className="ml-3 mx-0" /></Link>}
                        {!props.post.picture && <Link to={{ pathname: '/profile/' + props.post.ownerID }} state={{ modal: props.post._id }}> <IconExternalLink /> </Link>}
                    </div>
                </div>
                <hr></hr>
            </>
        )
    }
}