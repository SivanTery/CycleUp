import dollar from '../assets/icons/dollar.png';
import {useEffect, useState} from "react"
import {FirstStep} from '../cmps/benefits/step-1.jsx'
import {SecondStep} from '../cmps/benefits/step-2.jsx'
import {ThirdStep} from '../cmps/benefits/step-3.jsx'

export function SingleBenefit( { img, desc, id } ) {

    const [step, setStep] = useState( 1 )



    function renderCmp() {
        if ( step === 1 ) return <FirstStep img={img} desc={desc} setStep={setStep}/>
        else if ( step === 2 ) return <SecondStep img={img} desc={desc} setStep={setStep}/>
        else return <ThirdStep img={img} desc={desc} setStep={setStep}/>
    }

    return (
        <div className="single-wrapper">
            {renderCmp()}
        </div>
    )

}