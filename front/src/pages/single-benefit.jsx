import {utilService} from "../services/util.service"
import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';

export function SingleBenefit( { img, desc, id } ) {
    return (
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
            <button className="site-btn">אני רוצה את זה</button>
        </div>
    )

}