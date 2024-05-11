import { NavLink, Link } from 'react-router-dom'

export function HomePage() {
    return (
            <section className='home main-layout'>
                <div className='nav-card-wrapper'>
                    <div className='nav-card'>
                    <NavLink to="/scan">סריקת מוצר</NavLink>
                    </div>
                    <div className='nav-card'>
                    <NavLink to="/invite-friends">הזמנת חברים</NavLink>
                    </div>
                </div>
            </section>
    )
}