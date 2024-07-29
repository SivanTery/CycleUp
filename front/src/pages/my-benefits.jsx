import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';
import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';

export function MyBenefits( { setActiveBenefit } ) {

    function getFutureDate( add ) {
        let date = new Date()
        date.setDate( date.getDate() + 100 + add )
        return date.toLocaleDateString( 'he-IL' )
    }

    return (
        <div className="my-benefits main-layout">
            <div className="content-wrapper">
                <h1>רשימת ההטבות שלי</h1>
                <div className='nav-card-wrapper'>
                    <div className='brand-card'>
                        <h2>שובר בסך 50 ₪ ברשת Foot locker</h2>
                        <p className="alert">בתוקף עד {getFutureDate()}</p>
                        <p>מימוש בסניף</p>
                        <span>מומש</span>
                    </div>
                    <div className='brand-card'>
                        <h2>שובר בסך 50 ₪ ברשת Billabong</h2>
                        <p className="alert">בתוקף עד {getFutureDate( 20 )}</p>
                        <p>מימוש בסניף</p>
                    </div>
                </div>
            </div>
        </div>
    )

}