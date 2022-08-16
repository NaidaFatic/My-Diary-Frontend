import { IconUser } from '@tabler/icons';
import React, { useState } from 'react';

export const FriendsRequest = (props) => {
    const [isApproved, setIsApproved] = useState(false);

    const approve = (e) => {
        setIsApproved(!isApproved);
    };

    if (!props) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            <div className="post-img flex flex-wrap items-center pb-5">
                <IconUser className="user-img" />
                <h4>User Name</h4>
                <h4 className={`text-right grow mr-3  ${isApproved ? 'like-notf' : 'dislike'}`} onClick={approve} ><span className="approve">Approve</span></h4>
            </div>
        )
    }
}