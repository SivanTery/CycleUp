import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';
import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';
import {useEffect, useState} from "react";
import {benefitsService} from "../services/benefits.service";

export function BenefitsList( { setActiveBenefit } ) {

    const [benefits, setBenefits] = useState( [] )

    useEffect( () => {
        const fetchBenefits = async () => {
            try {
                const result = await benefitsService.query();
                setBenefits( result );
            } catch ( error ) {
                console.error( 'Failed to fetch benefits', error );
            }
        };

        fetchBenefits();
    }, [] );

    return (
        <div className="content-wrapper">
            <h1>הגיע הזמן להתפנק...</h1>
            <img className="content-wrapper-img" src={presents}/>

            <div className='nav-card-wrapper'>
                {benefits.length ? benefits.map( benefit => {
                    return <div className='brand-card'>
                        <img src={benefit.imgUrl} className="brand-img large"/>
                        <p>שובר בסך {benefit.moneyWorth} ₪ ברשת {benefit.businessName}</p>
                        <div className="price">
                            <span>{benefit.voucherCost}</span>
                            <img src={dollar}/>
                        </div>
                        <a className="stretched-link"
                            role={"button"}
                            onClick={() => setActiveBenefit( {
                                id : benefit.benefitCode,
                                img : benefit.imgUrl,
                                desc : 'שובר בסך ' + benefit.moneyWorth +'  ₪ ברשת ' + benefit.businessName,
                                price : benefit.voucherCost,
                            } )}
                        ></a>
                    </div>
                } ) : null
                }
            </div>
        </div>
    )

}