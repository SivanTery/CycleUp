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
                <h1 className='forgot-password-title'>שחזור סיסמא</h1>
                <p>נא להכניס את המייל שאיתו נכנסת
                    בעבר למערכת ולאחר מכן יש ללחוץ
                    ”שליחה“ לקבלת לינק לשחזור
                    סיסמה</p>
                <form onSubmit={onSubmit} className='forgot-password-form'>
                    <div className='login-container'>
                        <label htmlFor="name">מייל:</label>
                        <input type='mail'
                            id="mail"
                            name='mail'
                            placeholder='הזן את המייל איתו נרשמת'
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