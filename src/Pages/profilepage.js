import "./profilepage.css";
import { IconUser, IconEdit, IconBookmark, IconPlus } from "@tabler/icons";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Ajax } from "../utils/axios";
import { IconLoader2 } from '@tabler/icons';
import jwt_decode from "jwt-decode";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ProfilePost from "../components/ProfilePost";
import { TextField } from "../components/TextField";

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

    useEffect(() => {
        setLoading(true);
        setUpdatedProfile(false);
        if (decoded.uid == params.id) { setProfileOwner(true); }

        Ajax.get('owners/' + params.id, null, function (response) {
            setOwner(response);
            setLoading(false);
        });

        Ajax.get('posts/owner/' + params.id, null, function (response) {
            setPosts(response);
            setLoading(false);
        });

    }, [setLoading, params.id, updatedProfile]);

    function updateProfile(values, actions) {

        for (var key of Object.keys(values)) {
            if (values[key] == "") delete values[key]
        }

        if (Object.keys(values).length != 0) {

            Ajax.put('owners/' + params.id, values, function (response) {
                console.log(response);
                setUpdatedProfile(true);
                setShowModal1(false);
            });
        } else {
            setShowModal1(false);
        }

    }

    function postPost(values, actions) {
        Ajax.post('posts/', values, function (response) {
            console.log(response);
            setUpdatedProfile(true);
            setShowModal2(false);
        });
    }

    const validation = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        description: Yup.string()
            .required('Required')
    });

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
                        <div>
                            <div className="flex flex-col">
                                <p className="postName grow m-auto pt:0">
                                    <IconPlus className="mt-20" onClick={() => setShowModal2(true)} />
                                </p>
                            </div>
                        </div>
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
                                            <Formik
                                                initialValues={{ name: '', surname: '', diaryName: '', status: '', age: '' }}
                                                onSubmit={(values, actions) => {
                                                    updateProfile(values, actions);
                                                }}
                                            >
                                                <Form>
                                                    <div className="relative p-6 md:flex modal">
                                                        <IconUser className="user-img flex-none md:basis-1/3" />
                                                        <div className="basis-2/3">
                                                            <TextField label="Name" name="name" type="text" placeholder="Name" />
                                                            <TextField label="Surname" name="surname" type="text" placeholder="Surname" />
                                                            <TextField label="Diary Name" name="diaryName" type="text" placeholder="Diary Name" />
                                                            <TextField label="Status" name="status" type="text" placeholder="Status" />
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
                                    <div className="relative my-6 mx-auto max-w-3xl" style={{ width: '75em' }}>
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Add Post
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal2(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <Formik
                                                initialValues={{ name: '', description: '', ownerID: decoded.uid }}
                                                validationSchema={validation}
                                                onSubmit={(values, actions) => {
                                                    postPost(values, actions);
                                                }}
                                            >
                                                <Form>
                                                    <div className="relative p-6 m-auto modal">
                                                        <div className="basis-2/3">
                                                            <TextField label="Name" name="name" type="text" placeholder="Post Name" />
                                                            <TextField label="Description" name="description" type="text" placeholder="Description" />
                                                            <TextField label="Picture" name="picture" type="file" />
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
