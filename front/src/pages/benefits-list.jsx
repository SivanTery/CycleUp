import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';
import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';

export function BenefitsList( { setActiveBenefit } ) {

    return (
        <div className="content-wrapper">
            <h1>הגיע הזמן להתפנק...</h1>
            <img className="content-wrapper-img" src={presents}/>

            <div className='nav-card-wrapper'>
                <div className='brand-card'>
                    <img src={footlocker} className="brand-img large"/>
                    <p>שובר בסך 50 ₪ ברשת Foot locker</p>
                    <div className="price">
                        <span>1,000</span>
                        <img src={dollar}/>
                    </div>
                    <a className="stretched-link"
                        role={"button"}
                        onClick={() => setActiveBenefit({
                            id: 'footlocker',
                            img: footlocker,
                            desc: 'שובר בסך 50 ₪ ברשת Foot locker',
                        })}
                    ></a>
                </div>
                <div className='brand-card'>
                    <img src={billabong} className="brand-img"/>
                    <p>שובר בסך 50 ₪ ברשת Billabong</p>
                    <div className="price">
                        <span>1,000</span>
                        <img src={dollar}/>
                    </div>
                    <a className="stretched-link"
                        role={"button"}
                        onClick={() => setActiveBenefit( {
                            id: 'billabong',
                            img: billabong,
                            desc: 'שובר בסך 50 ₪ ברשת Billabong',
                        } )}
                    ></a>
                </div>
                <div className='brand-card'>
                    <img src={naaman} className="brand-img x-large"/>
                    <p>שובר בסך 100 ₪ ברשת Naaman</p>
                    <div className="price">
                        <span>2,000</span>
                        <img src={dollar}/>
                    </div>
                    <a className="stretched-link"
                        role={"button"}
                        onClick={() => setActiveBenefit( {
                            id: 'naaman',
                            img: naaman,
                            desc: 'שובר בסך 100 ₪ ברשת Naaman',
                        } )}
                    ></a>
                </div>
            </div>
        </div>
    )

}