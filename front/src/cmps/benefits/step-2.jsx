import dollar from '../../assets/icons/dollar.png';
import {useState} from "react"
import {utilService} from "../../services/util.service"

export function SecondStep( { img, desc, setStep, price, tokens, setTokens } ) {

    function handleClick() {
        localStorage.setItem( 'tokens', localStorage.getItem( 'tokens' ) - price )
        setStep( prevState => ++prevState )
    }


    function handleCancel() {
        setStep( prevState => --prevState )
    }

    return (
        <>
            <div className="single-wrapper">
                <div className="image-wrapper">
                    <img src={img} className="brand-img large"/>
                </div>
                <h1>{desc}</h1>

                <div className="benefit-wrapper">
                    <h2>איזה כיף, בחרת הטבה!</h2>
                    <p>{desc}</p>
                    <p>תקף עד {utilService.getFutureDate( Date.now(), 365 )} גם במבצעים והנחות המיועדים לכלל הלקוחות.</p>

                    <div className="action-wrapper">
                        <button className="site-btn" onClick={() => handleClick()}>ביצוע רכישה</button>
                        <button className="site-btn" onClick={() => handleCancel()}>ביטול</button>
                    </div>
                </div>

            </div>
        </>
    )

}