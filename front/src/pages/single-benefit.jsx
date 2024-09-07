import dollar from '../assets/icons/dollar.png';
import {useEffect, useState} from "react"
import {FirstStep} from '../cmps/benefits/step-1.jsx'
import {SecondStep} from '../cmps/benefits/step-2.jsx'
import {ThirdStep} from '../cmps/benefits/step-3.jsx'

export function SingleBenefit( { img, desc, id, price, setActiveBenefit } ) {

    const [step, setStep] = useState( 1 )



    function renderCmp() {
        if ( step === 1 ) return <FirstStep img={img} desc={desc} setStep={setStep} price={price}/>
        else if ( step === 2 ) return <SecondStep img={img} desc={desc} setStep={setStep} price={price}/>
        else return <ThirdStep img={img} desc={desc} setStep={setStep} price={price}/>
    }

    return (
        <div className="single-wrapper">
           <button onClick={() => setActiveBenefit( null )} className="close-benefit">X</button>
            {renderCmp()}
        </div>
    )

}