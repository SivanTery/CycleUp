import {NavLink, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import dollar from "../assets/icons/dollar.png";

export function AppHeader() {

    const [showBackButton, setShowBackButton] = useState( false );
    const location = useLocation();

    useEffect( () => {
        const handleLocationChange = () => {
            if ( location.pathname === '/' && (location.hash === '' || location.hash === '#/' || location.hash === '#') ) {
                setShowBackButton( false );
            } else {
                setShowBackButton( true );
            }
        };

        // Initial check
        handleLocationChange();

        // Run handleLocationChange whenever location changes
        handleLocationChange();
        console.log( location)
    }, [location] );

    function goBack() {
        window.history.back()
    }

    return (
        <header className="app-header full main-layout">
            <div className='header-container'>
                <nav>
                    <NavLink to="/" className="logo">CycleUp</NavLink>

                    {/*hide when location is /#/user*/}
                    {location.pathname !== '/user' ? <div className="user-details">
                        שלום עדן
                        <div className="price">
                            <span>{localStorage.getItem( 'tokens' )}</span>
                            <img src={dollar}/>
                        </div>
                    </div> : null }





                    {showBackButton ? <button className="arrow-back" onClick={() => goBack()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="30px" height="30px" viewBox="0 0 24 24">
                            <g data-name="Layer 2">
                                <g data-name="arrow-back">
                                    <rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/>
                                    <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                                </g>
                            </g>
                        </svg>
                    </button> : null}

                </nav>
            </div>
        </header>
    )
}