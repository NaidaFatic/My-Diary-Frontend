import "../index.css";
import React, { useState, useEffect, useRef } from 'react';
import { Comments } from "../components/Comments";
import { IconUser, IconHeart, IconMessage2, IconSend, IconLoader2 } from '@tabler/icons';
import { Ajax } from "../utils/axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

export const Post = (props) => {
    //console.log(props.post.ownerID)
    const [owner, setOwner] = useState();
    const [loading, setLoading] = useState();
    const [liked, setLiked] = useState(false);
    const [isComment, setIsComment] = useState(false);
    const [comment, setComment] = useState();
    const [addComments, setAddComments] = useState();
    const inputMessage = useRef(null);
    var decoded = jwt_decode(localStorage.getItem('token'));

    useEffect(() => {
        setLoading(true);
        Ajax.get('owners/' + props.post.ownerID, null, function (response) {
            setOwner(response);
            setLoading(false);
        });

        if (props.post.likes.includes(decoded.uid)) {
            setLiked(true);
        }

        Ajax.get('comments/post/' + props.post._id, null, function (response) {
            setComment(response);
        });

    }, [setLoading, addComments]);


    const like = (e) => {

        if (liked) {
            Ajax.put('posts/unlikes/' + props.post._id, { "id": decoded.uid }, function (response) { console.log(response) });
            setLiked(false);
        } else {
            Ajax.put('posts/likes/' + props.post._id, { "id": decoded.uid }, function (response) { console.log(response) });
            setLiked(true);
        }

    };

    const addComment = (e) => {
        setAddComments(inputMessage.current.value);
        Ajax.post('comments/' + props.post._id, { "ownerID": decoded.uid, "description": inputMessage.current.value }, function (response) { console.log(response) });
    };

    const showComment = (e) => {
        setIsComment(!isComment);
    };

    //console.log(comment);

    if (loading || !owner) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <div className="post">
                <section>
                    <div className="post-img flex flex-wrap items-center ">
                        <Link to={{
                            pathname: '/profile/' + owner._id
                        }}> < IconUser className="user-img" /></Link>
                        <h4 className="font-bold">{owner.name} {owner.surname}</h4>
                    </div>
                </section>
                <section>
                    {props.post.picture &&
                        <div>
                            <div className="post-photo">
                                <img src={props.post.picture} height="45" width="100" style={{ width: '100%' }} alt="Post image" />
                            </div>
                        </div>
                    }
                    <div className="px-5">
                        <div className="post-name">
                            <h4 className="font-bold">{props.post.name}</h4>
                        </div>
                        <div className="post-desc">
                            <p>{props.post.description}</p>
                        </div>
                        <div className="post-comment flex">
                            <IconHeart className={`ml-0 ${liked ? 'like' : 'dislike'}`} onClick={like} />
                            <IconMessage2 className={isComment ? 'comment' : 'uncomment'} onClick={showComment} />
                        </div>
                        <div className="pb-5">
                            {comment && React.Children.toArray(
                                comment.map((val) => <div className={isComment ? 'showComment' : 'notShowComment'}><Comments comment={val} /></div>)
                            )}
                            <div>
                                <div className="flex items-center ml-5">
                                    <IconUser className="user-img" />
                                    <input type="text" name="comment" ref={inputMessage} />
                                    <IconSend onClick={addComment} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        )
    }
}