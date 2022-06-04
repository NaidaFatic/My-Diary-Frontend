import "./profilepage.css";
import Background from "../img/branding.png";
import Background1 from "../img/logo-sm.png";
import { IconUser, IconEdit } from "@tabler/icons";
import React from "react";

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");
    var backgroundImageStyle = {
        backgroundImage: `url(${Background})`
    };
    var backgroundImageStyle1 = {
        backgroundImage: `url(${Background1})`
    };
    const [showModal, setShowModal] = React.useState(false);
    const [showModal1, setShowModal1] = React.useState(false);

    return (
        <main className="pt:20">
            <div className="profile">
                <section>
                    <div className="flex flex-wrap items-start">
                        <IconUser className="user-img flex-none" />
                        <div className="grow">
                            <h4 className="font-bold">User Name</h4>
                            <h4>Welcome To My Diary</h4>
                            <h5>Status 😋 Feeling lucky</h5>
                            <h5>Age 🙄 18y</h5>
                        </div>
                        <IconEdit className="flex-none self-end" onClick={() => setShowModal1(true)} />
                    </div>
                </section>
                <hr />
                <div className="month"><p>May</p></div>
                <section className="grid md:grid-cols-4 
                grid-cols-2 gap-4 posts">

                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 1 🙄
                            </p>
                            <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle1}>
                            <p className="postName grow">
                                Post 2 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 3 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />
                        </div>
                        <p className="postDescription">Desciption</p>
                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle1}>
                            <p className="postName grow">
                                Post 4 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div> <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 5 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" onClick={() => setShowModal(true)} />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                </section>
                {showModal1 ? (
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
                                            onClick={() => setShowModal(false)}
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
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                ) : null}

                {showModal ? (
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
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                ) : null}
            </div >
        </main >
    );
}

export default ProfilePage;
