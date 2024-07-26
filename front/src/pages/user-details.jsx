import {useEffect, useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import dollar from "../assets/icons/dollar.png";

export function UserDetails() {

    const [user, setUser] = useState( {} )
    const isLoggedIn = sessionStorage.getItem( 'user_logged_in' )
    useEffect( () => {
        if ( !isLoggedIn ) {
            window.location.href = '/#/login'
        }
    }, [] );

    return (
        <section className='user main-layout'>
            <div className="container">
                <h1>שלום רון!</h1>
                <div className="image-wrapper">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt=""/>
                </div>
                <div className="price">
                    <span>4,652</span>
                    <img src={dollar}/>
                </div>
                <div className="action-wrapper">
                <NavLink className="site-btn" to="/leads">מי מוביל?</NavLink>
                <NavLink className="site-btn" to="/my-benefits">ההטבות שלי</NavLink>
                <NavLink className="site-btn" to="/user-update">עדכון פרטים אישיים</NavLink>
                </div>

            </div>
        </section>
    )
}