import { IconEdit } from "@tabler/icons";
import React, { useState, useEffect } from 'react';
import { Ajax } from "../utils/axios";
import { IconLoader2 } from '@tabler/icons';
import jwt_decode from "jwt-decode";

function ProfilePost(props) {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    var decoded = jwt_decode(localStorage.getItem('token'));
    const [profileOwner, setProfileOwner] = useState(false);

    useEffect(() => {


    }, [setLoading]);

    var backgroundImageStyle = {
        backgroundImage: `url(${props.post.picture})`
    };

    if (loading || !props.post) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <div>
                <div className="flex flex-col" style={backgroundImageStyle}>
                    <p className="postName grow">
                        {props.post.name}
                    </p>
                    {profileOwner && <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />}
                </div>
                <p className="postDescription">{props.post.description}</p>

                {
                    showModal ? (
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
                                                Update Post
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative p-6 modal">
                                            <div>
                                                <label>
                                                    <h4>Post Name</h4>
                                                    <input type="text" name="username" placeholder="username" />
                                                </label>
                                                <label>
                                                    <h4>Post Desciption</h4>
                                                    <input type="text" name="title" placeholder="title" />
                                                </label>
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Back
                                            </button>
                                            <button
                                                className="bg-submit text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
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
        );
    }
}

export default ProfilePost;
