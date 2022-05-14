import "./feedpage.css";
import "../index.css";
import logo from "../img/branding.png";
import { IconUser, IconHeart, IconMessage2 } from '@tabler/icons';


function FeedPage(props) {
    props.setCurrentPage("FEED");
    return (
        <main>
            <div className="fw post w-1740">
                <section>
                    <div className="post-img flex flex-wrap">
                        <IconUser className="user-img" />
                        <h3>User Name</h3>
                    </div>
                </section>
                <section className="lg:flex">
                    <div className="basis-1/2">
                        <div className="post-photo pt-3">
                            <img src={logo} height="45" width="100" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="basis-1/2 px-5">
                        <div className="post-name">
                            <h3>Post Name</h3>
                        </div>
                        <div className="post-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="post-comment flex lg:flex-row-reverse ">
                            <IconHeart className="ml-0" />
                            <IconMessage2 />
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}

export default FeedPage;
