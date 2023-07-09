import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
function Header() {
    return (
        <nav className="Navbar">
            <div>
                <Link to={"/"} className="Home">
                    User's
                </Link>
            </div>
            <div className="name">
                <div>My Team</div>
                <div>
                    <Link to={"/team"}>
                        <RiTeamFill className="my_team" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Header;
