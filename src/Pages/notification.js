import "./notification.css";
import "../index.css";
import logo from "../img/branding.png";
import logo1 from "../img/logo-sm.png";
import React, { useState } from 'react';
import { IconUser, IconHeart, IconFlame, IconMessage2 } from '@tabler/icons';


function NotificationPage(props) {
    props.setCurrentPage("NOTIF");
    const [isApproved, setIsApproved] = useState(false);
    var count = 0;

    const approve = (e) => {
        setIsApproved(!isApproved);
    };

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
                <section className="py-4 notif">
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <h4 className={`text-right grow mr-3  ${isApproved ? 'like-notf' : 'dislike'}`} onClick={approve} ><span className="approve">Approve</span></h4>
                    </div>
                    <hr></hr>
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <h4 className={`text-right grow mr-3  ${isApproved ? 'like-notf' : 'dislike'}`} onClick={approve} ><span className="approve">Approve</span></h4>
                    </div>                    <hr></hr>
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <h4 className={`text-right grow mr-3  ${isApproved ? 'like-notfike' : 'dislike'}`} onClick={approve} ><span className="approve">Approve</span></h4>
                    </div>
                </section>
            </div >
            <h4 className="mx-3 mb-5 flex">Liked Posts  <IconHeart style={{ fill: 'red' }} /></h4>
            <div className="post">
                <section className="py-4">
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <div className="like-post text-right grow"><img src={logo} height="45" width="50" className="mr-0" /></div>
                    </div> <hr></hr>
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <div className="like-post text-right grow"><img src={logo1} height="45" width="50" className="mr-0" /></div>
                    </div>
                </section>
            </div >
            <h4 className="mx-3 mb-5 flex">Commented Posts  <IconMessage2 style={{ fill: '#114B5F' }} /></h4>
            <div className="post">
                <section className="py-4">
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <div className="like-post text-right grow"><img src={logo} height="45" width="50" className="mr-0" /></div>
                    </div> <hr></hr>
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4>User Name</h4>
                        <div className="like-post text-right grow"><img src={logo1} height="45" width="50" className="mr-0" /></div>
                    </div>
                </section>
            </div >
        </main >
    );
}

export default NotificationPage;
