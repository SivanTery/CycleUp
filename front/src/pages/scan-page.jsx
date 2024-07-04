import { NavLink, Link } from 'react-router-dom'

export function ScanPage() {
    return (
            <section className='scan-page main-layout'>

                    <div className='nav-card-wrapper'>
                    <div className='nav-card'>
                    <NavLink to="/add-product">אני רוצה למחזר</NavLink>
                    </div>
                    <div className='nav-card'>
                    <NavLink to="/products">אני רוצה עזרה</NavLink>

                    </div>
                </div>
                   
            </section>
    )

}