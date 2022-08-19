import React from 'react';
import { FriendLike } from "./FriendLike"

export const FriendsLike = (props) => {

    if (!props.likes) {
        return (
            <main>
                Loading...
            </main >
        );

    } else {
        return (
            <>
                {props.likes && React.Children.toArray(
                    props.likes.map((val) => <FriendLike user={val} post={props.post} />)
                )}
            </>
        )
    }
}