import dollar from '../../assets/icons/dollar.png';
import {useState} from "react"
import {utilService} from "../../services/util.service";
import {NavLink} from "react-router-dom";

export function ThirdStep( { img, desc, setStep, id } ) {

    function handleClick() {
        setStep( prevState => ++prevState )
    }

    function getFutureDate() {
        let date = new Date()
        date.setDate( date.getDate() + 100 )
        return date.toLocaleDateString( 'he-IL' )
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
                    <h2>הקוד למימוש ההטבה</h2>
                    <p className="code-wrapper">{utilService.makeId()}</p>
                    <p className="alert">תוקף הטבה זה יפוג בתאריך {getFutureDate()}</p>
                    <p>יש להציג את הקוד בחנות.</p>
                    <NavLink className="site-btn" to="/">הבנתי, תודה.</NavLink>
                </div>

            </div>
        </>
    )

}