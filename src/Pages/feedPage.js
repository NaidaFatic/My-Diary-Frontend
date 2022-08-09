import "./feedpage.css";
import "../index.css";
import React, { useState, useEffect } from 'react';
import { Post } from "../components/Post";
import { Ajax } from "../utils/axios";

function FeedPage(props) {
    props.setCurrentPage("FEED");
    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);

        Ajax.get('posts', null, function (response) {
            const loadPosts = [];

            for (const key in response) {

                const post = {
                    id: key,
                    ...response[key]
                }

                loadPosts.push(post);
            };
            setPosts(loadPosts);
            setLoading(false);
        });
    }, [setLoading]);

    // console.log(posts);
    if (loading || posts == null) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            < main >
                {React.Children.toArray(
                    posts.map((val) => <Post post={val} />)
                )}
                {/* {posts.map((post) => (
                    <Post post={post} />
                ))} */}
            </main >
        );
    }

}

export default FeedPage;
