import {useState} from "react";

export function ForgotPassword() {

    const [mail, setMail] = useState( '' )

    function onSubmit( ev ) {
        ev.preventDefault()
        // TODO: Handle email sent
        // userLogin(user)
        window.location.href = '/'
    }

    function handleChange( { target } ) {
        let { value } = target
        setMail( value )
    }

    return (
        <section className='login main-layout'>
            <div className="container">
                <h1 className='forgot-password-title'>שחזור סיסמה</h1>
                <p className='forgot-password-text'>לשחזור סיסמה נא להכניס את המייל שאיתו נרשמת</p>
                <form onSubmit={onSubmit} className='forgot-password-form'>
                    <div className='login-container'>
                        <label htmlFor="name">מייל:</label>
                        <input type='mail'
                            id="mail"
                            name='mail'
                            placeholder='הזן מייל'
                            value={mail}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="login-btn">שליחה</button>

                </form>
            </div>
        </section>
    )
}