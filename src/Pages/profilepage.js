import "./profilepage.css";
import Background from "../img/branding.png";
import Background1 from "../img/logo-sm.png";
import { IconUser, IconEdit } from "@tabler/icons";

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");
    var backgroundImageStyle = {
        backgroundImage: `url(${Background})`
    };
    var backgroundImageStyle1 = {
        backgroundImage: `url(${Background1})`
    };

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
                        <IconEdit className="flex-none self-end" />
                    </div>
                </section>
                <hr />
                <section className="grid grid-cols-4 gap-4 posts">
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 1 🙄
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle1}>
                            <p className="postName grow">
                                Post 2 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 3 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>
                    </div>
                    <div>
                        <div className="flex flex-col" style={backgroundImageStyle1}>
                            <p className="postName grow">
                                Post 4 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div> <div>
                        <div className="flex flex-col" style={backgroundImageStyle}>
                            <p className="postName grow">
                                Post 5 😋
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                </section>
            </div >
        </main >
    );
}

export default ProfilePage;
