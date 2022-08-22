import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Ajax } from "../utils/axios";
import { IconLoader2 } from '@tabler/icons';
import ProfilePost from "../components/ProfilePost";

function ProfilePosts(props) {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState();
    const [changed, setChanged] = useState(false);
    const [len, setLen] = useState(false);

    useEffect(() => {
        setLoading(true);
        Ajax.get('posts/owner/' + params.id, null, function (response) {
            setPosts(response);
            setLoading(false);
            setLen(response.length > 0)
        });
    }, [setLoading, params, changed]);

    function rend() {
        setChanged(!changed);
    }

    if (loading || !props.owner) {
        return (
            <main>
                <IconLoader2 className="m-auto" />
            </main >
        );
    } else {
        return (
            <>
                {/* <button id="upload_widget" className="cloudinary-button" onClick={showWidget}>Upload files</button> */}
                {
                    len && React.Children.toArray(
                        posts.map((val) => <ProfilePost post={val} id={params.id} owner={props.owner} change={rend} openModal={props.openModal} />)
                    )
                }
            </>
        );
    }
}

export default ProfilePosts;
