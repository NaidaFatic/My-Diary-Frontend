import "./notification.css";
import "../index.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Ajax } from "../utils/axios";
import { IconHeart, IconFlame, IconMessage2 } from '@tabler/icons';
import { FriendsRequest } from "../components/FriendsRequest"
import { FriendsLike } from "../components/FriendsLike"
import { FriendsComment } from "../components/FriendsComment"
import { WarningUnauthorized } from "../components/WarningUnauthorized"

function NotificationPage(props) {
    props.setCurrentPage("NOTIF");
    const params = useParams();
    var decoded = jwt_decode(localStorage.getItem('token'));
    const [friendRequest, setFriendRequest] = useState();
    const [posts, setPosts] = useState([]);
    const [profileOwner, setProfileOwner] = useState(false);

    useEffect(() => {
        setProfileOwner((decoded.uid === params.id));

        Ajax.get('owners/' + params.id, null, function (response) {
            setFriendRequest(response.friendsRequest);
        });

        Ajax.get('posts/owner/' + params.id, null, function (response) {
            setPosts(response);
        });

    }, [params, decoded.uid, profileOwner]);

    if (!profileOwner) {
        return (
            < main >
                <WarningUnauthorized />
            </main >
        )
    } if (profileOwner) {
        return (
            <main>
                <div className="post">
                    <section>
                        <div className="post-img flex flex-wrap items-center ">
                            <h4 className="font-bold">Notifications</h4>
                        </div>
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Friend Requests <IconFlame style={{ fill: 'red' }} /></h4>
                <div className="post">
                    <section className="pt-4 notif">
                        <FriendsRequest request={friendRequest} id={params.id} />
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Liked Posts  <IconHeart style={{ fill: 'red' }} /></h4>
                <div className="post">
                    <section className="pt-4">
                        {/* {React.Children.toArray(
                            posts.map((val) => <FriendsRequest likes={val.likes} />)
                        )} */}
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Commented Posts  <IconMessage2 style={{ fill: '#114B5F' }} /></h4>
                <div className="post">
                    <section className="pt-4">
                        <FriendsComment />
                    </section>
                </div >
            </main >
        );
    }
}

export default NotificationPage;
