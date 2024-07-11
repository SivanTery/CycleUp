import dollar from '../../assets/icons/dollar.png';
import {useState} from "react"

export function FirstStep( { img, desc, setStep, id } ) {

    function handleClick() {
        setStep(prevState => ++prevState)
    }

    return (
        <>
            <div className="single-wrapper">
                <div className="image-wrapper">
                    <img src={img} className="brand-img large"/>
                </div>
                <h1>{desc}</h1>
                <div className="price">
                    <span>1,000</span>
                    <img src={dollar}/>
                </div>

                <p>תקף גם במבצעים והנחות המיועדים לכלל הלקוחות.</p>
                <button className="site-btn" onClick={() => handleClick()}>אני רוצה את זה</button>
            </div>
        </>
    )

}