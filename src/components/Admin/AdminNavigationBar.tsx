import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Admin/AdminNavigationBar.css';

function AdminNavigationBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavigation = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`responsive-navigation ${isExpanded ? 'expanded' : ''}`}>
            <div className="toggle-button" onClick={toggleNavigation}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/admin">Dashboard</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    {/* Add more admin-specific links */}
                </ul>
            </nav>
        </div>
    );
}

export default AdminNavigationBar;
