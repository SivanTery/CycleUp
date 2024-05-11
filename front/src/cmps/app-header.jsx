import { NavLink, Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="app-header full main-layout">
            <div className='header-container'>
                <nav>
                    <NavLink to="/">CycleUp</NavLink>
                </nav>
            </div>
        </header>
    )
}
