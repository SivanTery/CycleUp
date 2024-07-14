import purple from '../assets/img/purple.png';
import orange from '../assets/img/orange.png';
import blue from '../assets/img/blue.png';
import qr from "../assets/icons/qr-code-scan.png";

export function SearchGarbage() {

    const garbageColors = [
        orange, blue, purple,
        blue, purple,
        orange, blue, orange,
        purple, blue
    ]

    function getRan(){
        return Math.random() * 90
    }

    return (
            <section className='search-garbage main-layout'>
                {garbageColors.map( (gt, idx) => {
                    return <img src={gt} style={{top: getRan() + '%', left : (10 * idx) + 5 + '%'}}/>
                })}
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4370.766113305282!2d34.5603767286313!3d31.657982500991913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1720774688988!5m2!1sen!2sil" width="100%" height="100%" style={{border: 'none', margin: '0 auto'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
    )
}