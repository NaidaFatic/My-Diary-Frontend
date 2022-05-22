import "./profilepage.css";
import { IconUser, IconEdit } from "@tabler/icons";

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");

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
                        <div className="flex flex-col">
                            <p className="postName grow">
                                Post 1 🙄 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col">
                            <p className="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                    <div>
                        <div className="flex flex-col">
                            <p className="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption Desciption Desciption Desciption</p>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <p className="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit className="editPost flex-none self-end" />
                        </div>
                        <p className="postDescription">Desciption</p>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProfilePage;
