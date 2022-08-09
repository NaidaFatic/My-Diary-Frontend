import "../index.css";
import { IconUser } from '@tabler/icons';
import { Link } from "react-router-dom";

export const Comments = (props) => {
    const date = props.comment.updatedAt.split('T')[0]
    const time = props.comment.updatedAt.split('T')[1].split(':')[0] + ':' + props.comment.updatedAt.split('T')[1].split(':')[1]

    if (!props) {
        return (
            <main>
                Loading...
            </main >
        );
    } else {
        return (
            <div className="mb-5">
                <div className="flex items-center" >
                    <Link to={{ pathname: '/profile/' + props.comment.ownerID }}> <IconUser className="user-img" /> </Link>
                    <div className="commentDiv">
                        <input type="text" value={props.comment.description} readOnly disabled />
                        <small className="ml-2">{date} {time}</small>
                    </div>
                </div>
            </div >
        )
    }
}