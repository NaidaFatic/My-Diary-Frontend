import "./notification.css";
import "../index.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import jwt_decode from "jwt-decode";
import { Ajax } from "../utils/axios";
import { IconHeart, IconFlame, IconMessage2, IconX } from '@tabler/icons';
import { FriendsRequest } from "../components/FriendsRequest"
import { FriendsLike } from "../components/FriendsLike"
import { FriendsComment } from "../components/FriendsComment"
import { WarningUnauthorized } from "../components/WarningUnauthorized"
import { ToastContainer } from 'react-toastify';
import { SearchFriend } from "../components/SearchFriend";

function NotificationPage(props) {
    props.setCurrentPage("NOTIF");
    const params = useParams();
    var decoded = jwt_decode(localStorage.getItem('token'));
    const [friendRequest, setFriendRequest] = useState();
    const [posts, setPosts] = useState([]);
    const [searchUsers, setSearchUsers] = useState([]);
    const [profileOwner, setProfileOwner] = useState(false);
    const [searchIcon, setsearchIcon] = useState(true);
    const inputSearch = useRef(null);

    useEffect(() => {
        setProfileOwner((decoded.uid === params.id));

        Ajax.get('owners/' + params.id, null, function (response) {
            setFriendRequest(response.friendsRequest);
        });

        Ajax.get('posts/owner/' + params.id, null, function (response) {
            setPosts(response);
        });

    }, [params, decoded.uid, profileOwner, searchIcon]);

    const search = (e) => {
        Ajax.get('owners/search', { params: { name: inputSearch.current.value } }, function (response) {
            setSearchUsers(response);
            setsearchIcon(true)
        })
    }

    const clear = (e) => {
        inputSearch.current.value = ""
        setsearchIcon(false)
    }
    //console.log(posts)
    if (!profileOwner) {
        return (
            < main >
                <WarningUnauthorized />
            </main >
        )
    } if (profileOwner) {
        return (
            <main>
                <ToastContainer />
                <div className="post">
                    <section>
                        <div className="post-img flex flex-wrap items-center ">
                            <h4 className="font-bold">Notifications</h4>
                            <div className="flex" style={{ width: '-webkit-fill-available' }}>
                                <input label="Name" name="name" type="text" placeholder="Search Friends" ref={inputSearch} onChange={search} />
                                <IconX onClick={clear} />
                            </div>
                            {searchIcon ? React.Children.toArray(
                                searchUsers.map((val) => (<SearchFriend user={val} />))
                            ) : null}
                        </div>
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Friend Requests <IconFlame style={{ fill: 'red' }} /></h4>
                <div className="post">
                    <section className="notif">
                        <FriendsRequest request={friendRequest} id={params.id} />
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Liked Posts  <IconHeart style={{ fill: 'red' }} /></h4>
                <div className="post">
                    <section>
                        {React.Children.toArray(
                            posts.map((val) => (<FriendsLike likes={val.likes} post={val} />))
                        )}
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Commented Posts  <IconMessage2 style={{ fill: '#114B5F' }} /></h4>
                <div className="post">
                    <section>
                        {React.Children.toArray(
                            posts.map((val) => (<FriendsComment post={val} />))
                        )}
                    </section>
                </div >
            </main >
        );
    }
}

export default NotificationPage;
