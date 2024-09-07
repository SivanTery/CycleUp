import {useEffect, useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import dollar from "../assets/icons/dollar.png";
import eden from "../assets/img/eden.jpeg";
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
                <h1>שלום עדן!</h1>
                <div className="image-wrapper">
                    <img src={eden}/>
                </div>
                <div className="price">
                    <span>{localStorage.getItem( 'tokens' )}</span>
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