import {useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import {userService} from "../services/user.service"

export function Login() {

    const [user, setUser] = useState( {} )

    function onSubmit( ev ) {
        ev.preventDefault()
        // TODO: CREATE USER
        let res = userService.login(user)
        if(res.status === 'success'){
            sessionStorage.setItem('user_logged_in', true)
        }
        window.location.href = '/'
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
                            <label htmlFor="password">סיסמה:</label>
                            <input type='password'
                                name='password'
                                id='password'
                                placeholder='הזן את הסיסמה'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="actions-wrapper">
                            <button className="login-btn">התחברות</button>
                            <NavLink className="forgot-pass" to="/forgot-password">שכחתי סיסמה</NavLink>
                            <NavLink className="login-btn" to="/signup">יצירת משתמש</NavLink>
                        </div>

                    </form>
            </div>
        </section>
    )
}