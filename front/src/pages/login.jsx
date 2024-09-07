import {useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import {userService} from "../services/user.service"

export function Login() {

    const [user, setUser] = useState( {} )

    function onSubmit( ev ) {
        ev.preventDefault()
        console.log(user)
        // TODO: CREATE USER
        let res = userService.login(user)
        console.log(res)
        // let res = userService.query()
            sessionStorage.setItem('user_logged_in', true)
            localStorage.setItem('tokens', 8580)
        if(res.status === 'success'){
        }
        window.location.href = '/'
    }

    function handleChange( { target } ) {
        let { value, name : field } = target
        setUser( ( prevState ) => {
            console.log( { ...prevState, [ field ] : value })
            return { ...prevState, [ field ] : value }
        } )
    }

    return (
        <section className='login main-layout'>
            <div className="container">
                <h1>ברוכים הבאים</h1>
                <form onSubmit={onSubmit} className='login-form'>
                        <div className='login-container'>
                            <label htmlFor="email">שם משתמש:</label>
                            <input type='text'
                                id="email"
                                name='email'
                                placeholder='הזן את שם המשתמש'
                                value={user.email}
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