import {useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import {userService} from "../services/user.service"

export function Login() {

    const [user, setUser] = useState( {} )

    function onSubmit( ev ) {
        ev.preventDefault()
        // TODO: CREATE USER
        userService.login(user)
        // window.location.href = '/'
    }

    function handleChange( { target } ) {
        let { value, name : field } = target
        setUser( ( prevState ) => {
            return { ...prevState, [ field ] : value }
        } )
    }

    return (
        <section className='login main-layout'>
            <div className="container">
                <h1>ברוכים הבאים</h1>
                <form onSubmit={onSubmit} className='login-form'>
                        <div className='login-container'>
                            <label htmlFor="name">שם משתמש:</label>
                            <input type='text'
                                id="name"
                                name='name'
                                placeholder='הזן את שם המשתמש'
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='login-container'>
                            <label htmlFor="password">סיסמא:</label>
                            <input type='password'
                                name='password'
                                id='password'
                                placeholder='הזן את הסיסמא'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="actions-wrapper">
                            <button className="login-btn">התחברות</button>
                            <NavLink className="forgot-pass" to="/forgot-password">שכחתי סיסמא</NavLink>
                            <NavLink className="login-btn" to="/signup">יצירת משתמש</NavLink>
                        </div>

                    </form>
            </div>
        </section>
    )
}