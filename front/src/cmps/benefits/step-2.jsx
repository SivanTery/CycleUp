import dollar from '../../assets/icons/dollar.png';
import {useState} from "react"

export function SecondStep( { img, desc, setStep, id } ) {

    function handleClick() {
        setStep( prevState => ++prevState )
    }

    function getFutureDate() {
        let date = new Date()
        date.setDate( date.getDate() + 100 )
        return date.toLocaleDateString('he-IL')
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
                    <p>תקף עד {getFutureDate()} גם במבצעים והנחות המיועדים לכלל הלקוחות.</p>

                <button className="site-btn" onClick={() => handleClick()}>ביצוע רכישה</button>
                <button className="site-btn" onClick={() => handleCancel()}>ביטול</button>
                </div>

            </div>
        </>
    )

}