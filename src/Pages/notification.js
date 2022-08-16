import "./notification.css";
import "../index.css";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import { IconHeart, IconFlame, IconMessage2 } from '@tabler/icons';
import { FriendsRequest } from "../components/FriendsRequest"
import { FriendsLike } from "../components/FriendsLike"
import { FriendsComment } from "../components/FriendsComment"
import { WarningUnauthorized } from "../components/WarningUnauthorized"

function NotificationPage(props) {
    props.setCurrentPage("NOTIF");
    const params = useParams();
    var decoded = jwt_decode(localStorage.getItem('token'));

    var owner = decoded.uid === params.id;
    if (!owner) {
        return (
            < main >
                <WarningUnauthorized />
            </main >
        )
    } if (owner) {
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
                        <FriendsRequest />
                    </section>
                </div >
                <h4 className="mx-3 mb-5 flex">Liked Posts  <IconHeart style={{ fill: 'red' }} /></h4>
                <div className="post">
                    <section className="pt-4">
                        <FriendsLike />
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
