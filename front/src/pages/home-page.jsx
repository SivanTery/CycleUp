import { NavLink, Link } from 'react-router-dom'

export function HomePage() {
    return (
            <section className='home main-layout'>
                    <NavLink to="/scan">סריקת מוצר</NavLink>
            </section>
    )
}