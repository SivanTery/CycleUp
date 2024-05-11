import { NavLink, Link } from 'react-router-dom'

export function ScanPage() {
    return (
            <section className='home main-layout'>
                    <NavLink to="/add-product">אני רוצה למחזר</NavLink>
                    <NavLink to="/products">אני רוצה עזרה</NavLink>
                   
            </section>
    )

}