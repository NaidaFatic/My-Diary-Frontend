import "./profilepage.css";
import { IconUser, IconEdit } from "@tabler/icons";

function ProfilePage(props) {
    props.setCurrentPage("PROFILE");

    return (
        <main class="pt:20">
            <div class="profile">
                <section>
                    <div class="flex flex-wrap items-start">
                        <IconUser class="user-img flex-none" />
                        <div class="grow">
                            <h4 class="font-bold">User Name</h4>
                            <h4>Welcome To My Diary</h4>
                            <h5>Status 😋 Feeling lucky</h5>
                            <h5>Age 🙄 18y</h5>
                        </div>
                        <IconEdit class="flex-none self-end" />
                    </div>
                </section>
                <hr></hr>
                <section class="grid grid-cols-2 md:grid-cols-4 gap-4 posts">
                    <div>
                        <div class="flex flex-col">
                            <p class="postName grow">
                                Post 1 🙄 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit class="editPost flex-none self-end" />
                        </div>
                        <p class="postDescription">Desciption</p>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <p class="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit class="editPost flex-none self-end" />
                        </div>
                        <p class="postDescription">Desciption</p>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <p class="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi dslkj salijsdlias
                                jdiosajdoisjdoi
                            </p>
                            <IconEdit class="editPost flex-none self-end" />
                        </div>
                        <p class="postDescription">
                            Desciption Desciption Desciption Desciption
                        </p>
                    </div>
                    <div>
                        <div class="flex flex-col">
                            <p class="postName grow">
                                Post 1 😋 dslkj salijsdlias jdiosajdoisjdoi
                            </p>
                            <IconEdit class="editPost flex-none self-end" />
                        </div>
                        <p class="postDescription">Desciption</p>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ProfilePage;
