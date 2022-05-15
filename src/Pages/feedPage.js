import "./feedpage.css";
import "../index.css";
import logo from "../img/branding.png";
import logo1 from "../img/logo-sm.png";
import React, { useState } from 'react';
import { IconUser, IconHeart, IconMessage2, IconSend } from '@tabler/icons';


function FeedPage(props) {
    props.setCurrentPage("FEED");
    const [isLike, setIsLike] = useState(false);
    const [isComment, setIsComment] = useState(false);
    var count = 0;

    const like = (e) => {
        setIsLike(!isLike);
    };

    const comment = (e) => {
        setIsComment(!isComment);
    };

    return (
        <main>
            <div className="post">
                <section>
                    <div className="post-img flex flex-wrap items-center ">
                        <IconUser className="user-img" />
                        <h4 className="font-bold">User Name</h4>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="post-photo pt-3">
                            <img src={logo} height="45" width="100" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="post-name">
                            <h4 className="font-bold">Post Name</h4>
                        </div>
                        <div className="post-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="post-comment flex">
                            <IconHeart className={`ml-0 ${isLike ? 'like' : 'dislike'}`} onClick={like} />
                            <IconMessage2 className={isComment ? 'comment' : 'uncomment'} onClick={comment} />
                        </div>
                        <div className="ml-11">
                            <div className={isComment ? 'showComment' : 'notShowComment'}>
                                <div className="flex items-center ml-10"><IconUser className="user-img" /> <input type="text" name="comment" placeholder="Comment on post" /><IconSend /></div>
                            </div>
                        </div>
                    </div>

                </section>
            </div >

            <div className="post">
                <section>
                    <div className="post-img flex flex-wrap items-center">
                        <IconUser className="user-img" />
                        <h4 className="font-bold">User Name</h4>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="post-photo pt-3">
                            <img src={logo1} height="45" width="100" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="post-name">
                            <h4 className="font-bold">Post Name</h4>
                        </div>
                        <div className="post-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="post-comment flex">
                            <IconHeart className={`ml-0 ${isLike ? 'like' : 'dislike'}`} onClick={like} />
                            <IconMessage2 className={isComment ? 'comment' : 'uncomment'} onClick={comment} />
                        </div>
                        <div className="ml-11">
                            <div className="flex items-center mb-5"><IconUser className="user-img" /> <input type="text" value="Comment" readOnly disabled /></div>
                            <div className={isComment ? 'showComment' : 'notShowComment'}>
                                <div className="flex items-center ml-10"><IconUser className="user-img" /> <input type="text" name="comment" placeholder="Comment on post" /><IconSend /></div>
                            </div>
                        </div>

                    </div>

                </section>
            </div >
        </main >
    );
}

export default FeedPage;
