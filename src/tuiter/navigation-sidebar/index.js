import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="/#" className="list-group-item"><i className="bi bi-twitter"></i> Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill"></i>&nbsp;Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                &nbsp;
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-cup-straw"></i> &nbsp;Labs
            </Link>
            <a href="/#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill"></i>
                &nbsp;
                Notifications
            </a>
            <a href="/#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill"></i>
                &nbsp;
                Messages
            </a>
            <a href="/#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill"></i>
                &nbsp;
                Bookmarks
            </a>
            <a href="/#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul"></i>
                &nbsp;
                Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i> &nbsp;Profile
            </Link>
            <a href="/#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                &nbsp;
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;

