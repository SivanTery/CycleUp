import {useState} from "react";
import {NavLink, Link} from 'react-router-dom'
import {userService} from "../services/user.service"

export function Signup() {

    const [showThankyou, setShowThankyou] = useState( false )
    const [user, setUser] = useState( {} )

    function onSubmit( ev ) {
        ev.preventDefault()
        // TODO: CREATE USER
        userService.save(user)
        setShowThankyou( true )
    }

    function handleChange( { target } ) {
        let { value, name : field } = target
        setUser( ( prevState ) => {
            return { ...prevState, [ field ] : value }
        } )
    }

    return (
        <section className='signup main-layout'>
            {!showThankyou ? <div className="container">
                    <h1>יצירת משתמש</h1>
                    <form onSubmit={onSubmit} className='login-form'>
                        <div className='login-container'>
                            <label htmlFor="name">שם משתמש:</label>
                            <input type='text'
                                id="name"
                                name='name'
                                placeholder='הזן שם המשתמש'
                                value={user.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='login-container'>
                            <label htmlFor="password">סיסמא:</label>
                            <input type='password'
                                name='password'
                                id='password'
                                placeholder='הזן סיסמא'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='login-container'>
                            <label htmlFor="mail">מייל:</label>
                            <input type='mail'
                                id="mail"
                                name='mail'
                                placeholder='הזן מייל'
                                value={user.mail}
                                onChange={handleChange}
                            />
                        </div>


                        <div className='login-container'>
                            <label htmlFor="phone">טלפון:</label>
                            <input type='number'
                                name='phone'
                                id='phone'
                                placeholder='הזן את מספר הטלפון הנייד'
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>


                        <div className='login-container'>
                            <label htmlFor="city">עיר מגורים:</label>
                            <input type='text'
                                name='city'
                                id='city'
                                placeholder='הזן עיר מגורים'
                                value={user.city}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="login-btn">אישור</button>
                        <NavLink className="forgot-pass" to="/login">כבר יש לי משתמש...</NavLink>

                    </form>
                </div> :
                <div className="container">
                    <div className='thankyou-wrapper'>
                        <h1>ההרשמה בוצעה בהצלחה</h1>
                        <p>איזה כיף שהצטרפת!</p>
                        <NavLink className="login-btn" to="/">קדימה</NavLink>

                    </div>
                </div>
            }
        </section>
    )
}