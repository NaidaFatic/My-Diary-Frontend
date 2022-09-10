import "./profilepage.css";
import { IconUser, IconEdit, IconBookmark, IconPlus, IconLoader2, IconUserPlus, IconColorPicker } from "@tabler/icons";
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import { Ajax } from "../utils/axios";
import jwt_decode from "jwt-decode";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ProfilePosts from "../components/ProfilePosts";
import { TextField } from "../components/TextField";
import { ToastContainer } from 'react-toastify';
import { SketchPicker } from 'react-color';

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");
    const params = useParams();
    const [owner, setOwner] = useState();
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    var decoded = jwt_decode(localStorage.getItem('token'));
    const [profileOwner, setProfileOwner] = useState(false);
    const [visitor, setVisitor] = useState(false);
    const [addFriend, setaddFriend] = useState(false);
    const [isFriends, setIsFriends] = useState(false);
    const location = useLocation()
    const [openModal, setOpenModal] = useState(false)
    const [postPicture, setPostPicture] = useState()
    const [colorBackground, setColorBackground] = useState("#c4c4c469")

    useEffect(() => {
        if (showModal1 || showModal2) { document.body.style.overflow = 'hidden'; }
        else { document.body.style.overflow = 'auto'; }

    }, [showModal2, showModal1]);

    useEffect(() => {
        setLoading(true);
        setUpdatedProfile(false);
        setProfileOwner((decoded.uid === params.id));

        if (location.state) { const { modal } = location.state; setOpenModal(modal) }

        Ajax.get('owners/' + params.id, null, function (response) {
            setOwner(response);
            setLoading(false);
            setPosts(<ProfilePosts owner={response} openModal={openModal} />)
        });

        Ajax.get('owners/' + decoded.uid, null, function (response) {
            setVisitor(response);
            setLoading(false);
            if (response.friends.includes(params.id) || response.friendsRequest.includes(params.id)) {
                setaddFriend(true);
            }
            if (response.friends.includes(params.id) || profileOwner) {
                setIsFriends(true);
            }
        });
        return () => {
        };
    }, [setLoading, params, updatedProfile, decoded.uid, profileOwner, setPosts, addFriend]);
    //console.log(addFriend)


    function updateProfile(values, actions) {

        for (var key of Object.keys(values)) {
            if (values[key] === "") delete values[key]
        }

        if (Object.keys(values).length !== 0) {

            Ajax.put('owners/' + params.id, values, function (response) {
                console.log(response);
                setUpdatedProfile(true);
                setShowModal1(false);
            });
        } else {
            setShowModal1(false);
        }

    }

    const addFriendFunction = (e) => {
        Ajax.put('owners/request/' + owner._id, { "friendID": visitor._id }, function (response) {
            console.log(response);
            setaddFriend(true);
        });
    }

    function postPost(values, actions) {
        Ajax.post('posts/', values, function (response) {
            console.log(response);
            setUpdatedProfile(true);
            setShowModal2(false);
            setPostPicture(null);
        });
    }

    const handleChangeComplete = (color) => {
        setColorBackground(color.hex);
        console.log(color.hex);
    };

    const validation = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        description: Yup.string()
            .required('Required')
    });

    if (owner) {
        var backgroundImageStyle = {
            backgroundImage: `url(${owner.profilePic})`
        };
    }
    const uploadProfilePic = () => {

        var widget = window.cloudinary.createUploadWidget({
            cloudName: 'dp9kduaei',
            uploadPreset: 'my-diary-profile'
        },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    Ajax.put('owners/' + params.id, { "profilePic": result.info.url }, function (response) {
                        console.log(response);
                        setUpdatedProfile(true);
                    });
                    console.log(result.info.url);
                }
            });
        widget.open()
    }

    const uploadPostPic = () => {
        var widget = window.cloudinary.createUploadWidget({
            cloudName: 'dp9kduaei',
            uploadPreset: 'my-diary-post'
        },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setPostPicture(result.info.url);
                }
            });
        //console.log(postPicture);
        widget.open()
    }

    if (postPicture) {
        var backgroundImageStyleAddImage = {
            backgroundImage: `url(${postPicture})`
        };
    } else {
        var backgroundImageStyleAddImage = {
            backgroundColor: '#b0b0b0'
        };
    }

    if (loading || !owner) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <main className="pt:20">
                <ToastContainer />
                <div className="profile">
                    <section>
                        <div className="flex flex-wrap items-start">
                            {owner.profilePic ? <div className="user-img-picture flex-none" style={backgroundImageStyle} /> : <IconUser className="user-img flex-none" />}
                            <div className="grow">
                                <h4 className="font-bold">{owner.name} {owner.surname}</h4>
                                {owner.diaryName && <h4>{owner.diaryName}</h4>}
                                {owner.comment && <h5>Status: {owner.comment}</h5>}
                                {owner.age && <h5>Age: {owner.age}</h5>}
                            </div>
                            <div className="flex flex-col" style={{ height: "fit-content" }}>
                                {profileOwner && <Link to={{
                                    pathname: '/diary/' + owner._id
                                }}><IconBookmark className="flex-start" /></Link>}
                                {profileOwner && <IconEdit className="flex-end" onClick={() => setShowModal1(true)} />}
                                {!profileOwner && !addFriend && <IconUserPlus className="flex-end mr-0 " onClick={addFriendFunction} />}
                            </div>
                        </div>
                    </section>
                    <hr />
                    {/* <div className="month"><p>May</p></div> */}
                    {
                        !isFriends ? <p className="px-5 pt-5"> Add {owner.name} to friends in order to see posts</p> :
                            <section className="grid md:grid-cols-4 grid-cols-2 gap-4 posts">
                                {posts}
                                {profileOwner && <div>
                                    <div className="flex flex-col postWrap">
                                        <p className="postName grow m-auto pt:0">
                                            <IconPlus className="mt-20" onClick={() => setShowModal2(true)} />
                                        </p>
                                    </div>
                                </div>}
                            </section>
                    }

                    {
                        showModal1 ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto max-w-3xl post-modal " style={{ width: '75em' }}>
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Update Profile
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    <span className="bg-transparent text-black   h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <Formik
                                                initialValues={{ name: '', surname: '', diaryName: '', comment: '', age: '' }}
                                                onSubmit={(values, actions) => {
                                                    updateProfile(values, actions);
                                                }}
                                            >
                                                <Form>
                                                    <div className="relative p-6 md:flex modal">
                                                        {owner.profilePic ? (<><div className="user-img-picture flex-none" style={backgroundImageStyle} onClick={uploadProfilePic} /></>) : (<IconUser className="user-img flex-none" onClick={uploadProfilePic} />)}
                                                        <div className="basis-2/3">
                                                            <TextField label="Name" name="name" type="text" placeholder="Name" />
                                                            <TextField label="Surname" name="surname" type="text" placeholder="Surname" />
                                                            <TextField label="Diary Name" name="diaryName" type="text" placeholder="Diary Name" />
                                                            <TextField label="Status" name="comment" type="text" placeholder="Status" />
                                                            <TextField label="Age" name="age" type="number" placeholder="Age" />
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
                                                            type="submit">Update
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null
                    }
                    {
                        showModal2 ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative my-6 mx-auto max-w-3xl pt-12 post-modal " style={{ width: '75em' }}>
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Add Post
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal2(false)}
                                                >
                                                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <Formik
                                                enableReinitialize
                                                initialValues={{ name: '', description: '', ownerID: decoded.uid, picture: postPicture, color: colorBackground }}
                                                validationSchema={validation}
                                                onSubmit={(values, actions) => {
                                                    postPost(values, actions);
                                                }}
                                            >
                                                <Form>
                                                    <div className="relative p-6 m-auto modal">
                                                        <div className="basis-2/3">
                                                            <h4>Pick color and image for your post</h4>
                                                            <div className="flex-none sm:flex justify-around py-3">
                                                                <SketchPicker color={colorBackground}
                                                                    onChangeComplete={handleChangeComplete} className="post-color " />

                                                                <input type="button" className="picture-button post-color text-white mt-5 md:mt-0 font-bold uppercase text-sm px-6 py-3 rounded outline-none mr-1 mb-1 ease-linear transition-all duration-150" style={backgroundImageStyleAddImage} onClick={uploadPostPic} value="Upload image" />
                                                            </div>
                                                            <TextField label="Name" name="name" type="text" placeholder="Post Name" />
                                                            <TextField label="Description" name="description" type="text" placeholder="Description" />
                                                        </div>
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                        <button
                                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="button"
                                                            onClick={() => setShowModal2(false)}
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            className="bg-submit text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                            type="submit">Post
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>
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
