import "./profilepage.css";
import { IconUser, IconEdit, IconBookmark } from "@tabler/icons";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Ajax } from "../utils/axios";
import { IconLoader2 } from '@tabler/icons';
import jwt_decode from "jwt-decode";
import ProfilePost from "../components/ProfilePost";

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");
    const params = useParams();
    const [owner, setOwner] = useState();
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    var decoded = jwt_decode(localStorage.getItem('token'));
    const [profileOwner, setProfileOwner] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (decoded.uid == params.id) { setProfileOwner(true); }

        Ajax.get('owners/' + params.id, null, function (response) {
            setOwner(response);
            setLoading(false);
        });

        Ajax.get('posts/owner/' + params.id, null, function (response) {
            setPosts(response);
            setLoading(false);
        });

    }, [setLoading, params.id]);
    //console.log(profileOwner)

    if (loading || !owner) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <main className="pt:20">
                <div className="profile">
                    <section>
                        <div className="flex flex-wrap items-start">
                            <IconUser className="user-img flex-none" />
                            <div className="grow">
                                <h4 className="font-bold">{owner.name} {owner.surname}</h4>
                                {owner.diaryName && <h4>{owner.diaryName}</h4>}
                                {owner.comment && <h5>Status: {owner.comment}</h5>}
                                {owner.age && <h5>Age: {owner.age}</h5>}
                            </div>
                            <div className="flex flex-col" style={{ height: "fit-content" }}>
                                <a href="/diary"><IconBookmark className="flex-start" /></a>
                                {profileOwner && <IconEdit className="flex-end" onClick={() => setShowModal1(true)} />}
                            </div>
                        </div>
                    </section>
                    <hr />
                    {/* <div className="month"><p>May</p></div> */}
                    <section className="grid md:grid-cols-4 grid-cols-2 gap-4 posts">
                        {posts && React.Children.toArray(
                            posts.map((val) => <ProfilePost post={val} id={params.id} />)
                        )}
                    </section>
                    {
                        showModal1 ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto max-w-3xl" style={{ width: '75em' }}>
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Update Profile
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 md:flex modal">
                                                <IconUser className="user-img flex-none md:basis-1/3" />
                                                <div className="basis-2/3">
                                                    <label>
                                                        <h4>User Name</h4>
                                                        <input type="text" name="username" placeholder="username" />
                                                    </label>
                                                    <label>
                                                        <h4>Title</h4>
                                                        <input type="text" name="title" placeholder="title" />
                                                    </label>
                                                    <label>
                                                        <h4>Status</h4>
                                                        <input type="status" name="status" placeholder="status" />
                                                    </label>
                                                    <label>
                                                        <h4>Age</h4>
                                                        <input type="age" name="age" placeholder="age" />
                                                    </label>
                                                </div>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-submit text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null
                    }
                </div >
            </main >
        );
    }
}

export default ProfilePage;
