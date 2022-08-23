import "./feedpage.css";
import "../index.css";
import React, { useState, useEffect } from 'react';
import { Post } from "../components/Post";
import { Ajax } from "../utils/axios";
import { ToastContainer } from 'react-toastify';
import InfiniteScroll from "react-infinite-scroll-component";

function FeedPage(props) {
    props.setCurrentPage("FEED");
    const [items, setItems] = useState([]);
    const [moreItems, setMoreItems] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [page, setpage] = useState(5);
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true);

        Ajax.get('posts', null, function (response) {
            setItems(response);
            setLoading(false);
        });
    }, [setLoading]);

    const fetchMoreData = () => {
        console.log('posts?page=' + page + '&limit=5');
        Ajax.get('posts?page=' + page + '&limit=5', null, function (response) {
            setItems([...items, ...response]);
            if (response.length === 0 || response.length < 5) {
                sethasMore(false);
            }
        });
        setpage(page + 5);
    };

    if (loading || !items) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            < main >
                <ToastContainer />
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<>Loading...</>}
                    endMessage={<>End</>}
                >
                    {React.Children.toArray(
                        items.map((val) => <Post post={val} />)
                    )}
                </InfiniteScroll>
            </main >
        );
    }

}

export default FeedPage;
