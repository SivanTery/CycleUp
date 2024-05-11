import { utilService } from "../services/util.service"
import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';

import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';


export function BenefitsPage() {
    return (
            <section className='benefits main-layout'>
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
                    </div>
                    <div className='brand-card'>
                    <img src={billabong} className="brand-img"/>
                        <p>שובר בסך 50 ₪ ברשת Billabong</p>
                        <div className="price">
                            <span>1,000</span>
                    <img src={dollar}/>
                        </div>
                    </div>
                    <div className='brand-card'>
                    <img src={naaman} className="brand-img x-large"/>
                        <p>שובר בסך 100 ₪ ברשת Naaman</p>
                        <div className="price">
                            <span>2,000</span>
                    <img src={dollar}/>
                        </div>
                    </div>
                </div>
                </div>
            </section>
    )

}

