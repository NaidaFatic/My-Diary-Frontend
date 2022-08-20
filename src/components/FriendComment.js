import { IconUser, IconExternalLink } from '@tabler/icons';
import React, { useState, useEffect } from 'react';
import { Ajax } from "../utils/axios";
import { Link } from "react-router-dom";

export const FriendComment = (props) => {
    const [user, setUser] = useState();
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Ajax.get('owners/' + props.comment.ownerID, null, function (response) {
            setUser(response);
            setLoading(false)
        });

        Ajax.get('posts/post/' + props.comment.postID, null, function (response) {
            setPost(response);
            setLoading(false)
        });

        return () => {

        };
    }, [setLoading, props]);

    //console.log(props);

    if (loading || !user || !post._id) {
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
                        pathname: '/profile/' + user._id
                    }}>  <IconUser className="user-img" /></Link>
                    <h4>{user.name} {user.surname}</h4>
                    <div className="like-post text-right grow flex justify-end items-center"><h4>{props.comment.description}</h4>
                        {post.picture && <Link to={{ pathname: '/profile/' + post.ownerID }} state={{ modal: post._id }}><img src={post.picture} height="45" width="50" alt={""} className="ml-3 mx-0" /></Link>}
                        {!post.picture && <Link to={{ pathname: '/profile/' + post.ownerID }} state={{ modal: post._id }}> <IconExternalLink /> </Link>}
                    </div>
                </div>
                <hr></hr>
            </>
        )
    }
}