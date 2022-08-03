import "./header.css";
import "../index.css";
import { IconLayoutDashboard, IconFlame, IconUser, IconBookmark } from '@tabler/icons';
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Header() {
    const { logout } = useLogout();
    const Logout = () => {
        logout();
    }
    return (
        <header>
            <div className="fw w-1740 flex justify-between z-50 relative">
                <div className="logo">
                    Online Diary
                </div>
                <div className="flex items-center">
                    <NavLink to="/feed"><IconLayoutDashboard /></NavLink>
                    <NavLink to="/notifications"> <IconFlame /></NavLink>
                    <NavLink to="/diary"><IconBookmark /></NavLink>
                    <NavLink to="/profile"><IconUser /></NavLink>
                    <button onClick={Logout}>Log out</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
