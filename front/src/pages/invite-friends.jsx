import { utilService } from "../services/util.service"

export function InviteFriendsPage() {
    return (
            <section className='invite-friends main-layout'>
                <div className="content-wrapper">
                <h1>מזמינים חברים ומקבלים מטבעות</h1>
                <h2>1. משתפים את הקוד</h2>
                <p>חברים שלך יוכלו להנות מ30- מטבעות
כאשר הם ירשמו למערכת עם הקוד שלך.</p>
                <h2>2. מקבלים מטבעות מתנה</h2>
                <p>
מקבלים 30 מטבעות לחשבונך על כל
חבר שיגיע דרך הקוד שלך!</p>

<div className="code">{utilService.makeId()}</div>
                </div>
            </section>
    )

}

