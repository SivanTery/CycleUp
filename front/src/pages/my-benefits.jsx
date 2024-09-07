import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';
import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';
import {utilService} from "../services/util.service"

export function MyBenefits( {  } ) {

    return (
        <div className="my-benefits main-layout">
            <div className="content-wrapper">
                <h1>רשימת ההטבות שלי</h1>
                <div className='nav-card-wrapper'>
                    <div className='brand-card'>
                        <h2>שובר בסך 50 ₪ ברשת Foot locker</h2>
                        <p className="alert">פג תוקף ההטבה  </p>
                        <p>מימוש בסניף</p>
                        <span>מומש</span>
                    </div>
                    <div className='brand-card'>
                        <h2>שובר בסך 100 ₪ ברשת Naaman</h2>
                        <p className="alert">בתוקף עד {utilService.getFutureDate( Date.now(), 365 )}</p>
                        <p>מימוש בסניף</p>
                    </div>
                </div>
            </div>
        </div>
    )

}