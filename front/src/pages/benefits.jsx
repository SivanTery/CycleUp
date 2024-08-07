import { utilService } from "../services/util.service"
import dollar from '../assets/icons/dollar.png';
import presents from '../assets/icons/presents.png';
import {useState} from "react"
import footlocker from '../assets/img/footlocker.png';
import billabong from '../assets/img/billabong.png';
import naaman from '../assets/img/naaman.png';
import {SingleBenefit} from "./single-benefit";
import {BenefitsList} from "./benefits-list";


export function BenefitsPage() {
    const [activeBenefit, setActiveBenefit] = useState( null )

    const onBenefitClick = (val) => {
        console.log(val)
        setActiveBenefit( val)
    }

    return (
            <section className={(activeBenefit ? 'single-benefit' : 'benefits  main-layout')}>
                {activeBenefit ?
                    <SingleBenefit
                        img={activeBenefit.img}
                        desc={activeBenefit.desc}
                        id={activeBenefit.id}
                        price={activeBenefit.price}
                    /> : <BenefitsList setActiveBenefit={onBenefitClick}/>}

            </section>
    )

}