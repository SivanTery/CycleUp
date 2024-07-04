import { NavLink, Link } from 'react-router-dom'
import support from '../assets/icons/support.png';
import giftCard from '../assets/icons/gift-card.png';
import qr from '../assets/icons/qr-code-scan.png';

export function HomePage() {
    return (
            <section className='home main-layout'>
                <div className='nav-card-wrapper'>
                    <div className='nav-card'>
                    <NavLink to="/scan">סריקת מוצר</NavLink>
                    <img src={qr}/>
                    </div>
                    <div className='nav-card'>
                    <NavLink to="/invite-friends">הזמנת חברים</NavLink>
                    <img src={support} className='large'/>
                    </div>
                    <div className='nav-card'>
                    <NavLink to="/benefits">הטבות</NavLink>
                    <img src={giftCard} className='large'/>
                    </div>
                </div>
            </section>
    )
}