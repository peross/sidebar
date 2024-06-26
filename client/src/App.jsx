import {useEffect, useRef, useState} from "react";
import './App.css';
import goLogo from './assets/go-logo.svg';
import goParking from './assets/go-parking.svg';

const App = () => {
    const [isCompact, setIsCompact] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const navigationRef = useRef(null);
    const dropdownRef = useRef(null);

    const toggleCompact = () => {
        setIsCompact(!isCompact);
    };

    const handleMenuClick = (index) => {
        setActiveMenu(index === activeMenu ? null : index);
    };

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className="layout">
            <nav className={`navigation ${isCompact ? 'compact' : ''}`} ref={navigationRef}>
                <div className="navigation-bar"></div>
                <div className="navigation-wrapper">
                    <div className="nav-top">
                        <div className="logo">
                            <div className="logo-container">
                                <img src={goLogo} alt="" />
                            </div>
                            <span className="app-name">parking</span>
                        </div>
                        <div className="main-menu">
                            <div className={`nav-menu-group ${activeMenu === 0 ? 'active' : ''}`} onClick={() => handleMenuClick(0)}>
                                <a href="#" className="nav-menu-icon">
                                    <i className="lnc lnc-home2"></i>
                                </a>
                                <div className="nav-menu-content">
                                    <strong className="nav-menu-title">Home</strong>
                                </div>
                            </div>
                            <div className={`nav-menu-group ${activeMenu === 1 ? 'active' : ''}`} onClick={() => handleMenuClick(1)}>
                                <a href="#" className="nav-menu-icon">
                                    <i className="lnc lnc-parking"></i>
                                </a>
                                <div className="nav-menu-content">
                                    <strong className="nav-menu-title">Parking</strong>
                                    <div className="nav-submenu">
                                        <a href="#" className="nav-item">Locations</a>
                                        <a href="#" className="nav-item disabled">Supervision</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`nav-menu-group ${activeMenu === 2 ? 'active' : ''}`} onClick={() => handleMenuClick(2)}>
                                <a href="#" className="nav-menu-icon">
                                    <i className="lnc lnc-ticket"></i>
                                </a>
                                <div className="nav-menu-content">
                                    <strong className="nav-menu-title">Tickets</strong>
                                    <div className="nav-submenu">
                                        <a href="#" className="nav-item">Short term</a>
                                        <a href="#" className="nav-item">Long term</a>
                                        <a href="#" className="nav-item">Users</a>
                                        <a href="#" className="nav-item">Kiosks</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`nav-menu-group ${activeMenu === 3 ? 'active' : ''}`} onClick={() => handleMenuClick(3)}>
                                <a href="#" className="nav-menu-icon">
                                    <i className="lnc lnc-id"></i>
                                </a>
                                <div className="nav-menu-content">
                                    <strong className="nav-menu-title">Parking control</strong>
                                    <div className="nav-submenu">
                                        <a href="#" className="nav-item">Overview</a>
                                        <a href="#" className="nav-item">Controllers</a>
                                        <a href="#" className="nav-item">Work orders</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <div className="nav-menu">
                            <div className="nav-menu-group nav-toggle" onClick={toggleCompact}>
                                <a href="#" className="nav-menu-icon">
                                    <i className="lnc lnc-slide-left"></i>
                                </a>
                                <div className="nav-menu-content">
                                    <strong className="nav-menu-title">Collapse</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <i className="lnc lnc-x menu-close" onClick={() => setIsNavOpen(false)}></i>
            </nav>
            <div className={`content-wrapper ${isNavOpen ? 'show' : ''}`}>
                <header>
                    <div className="header-left">
                        <a href="#" className="logo">
                            <img src={goParking} alt="" />
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="menu-group">
                            <div className="dropdown" ref={dropdownRef}>
                                <i className="lnc lnc-user dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}></i>
                                <div className={`dropdown-container ${isDropdownOpen ? 'open' : ''}`}>
                                    <a href="#" className="dropdown-item"><i className="lnc lnc-user"></i>Profile</a>
                                    <a href="#" className="dropdown-item"><i className="lnc lnc-cog"></i>Settings</a>
                                    <a href="#" className="dropdown-item disabled"><i className="lnc lnc-out"></i>Logout</a>
                                </div>
                            </div>
                            <i className="lnc lnc-menu menu-open" onClick={() => setIsNavOpen(true)}></i>
                        </div>
                    </div>
                </header>
                <main></main>
            </div>
        </div>
    );
};

export default App;
