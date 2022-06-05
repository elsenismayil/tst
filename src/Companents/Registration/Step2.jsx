import React, {useContext} from 'react'
import "..//../Css/Registration.css"
import Dark from '../Context'
import shortid from 'shortid'


export default function Step2({plans, step,onClick, setState}) {
    const DarkMood= useContext(Dark)
  
    return (
        <div className="container mx-auto " style={{paddingTop:"5rem"}}>
        <div className="register__slide__two mx-auto" style={{width:"80%"}}>
        <div className="register__slide__steps" style={DarkMood.Dark!==false ?{color:"red"} : {color:"white"}} >
            <span>STEP </span>
            <strong>2 </strong>
            <span>OF </span>
            <strong>3</strong>
        </div>
        <p className="register__slide__title font-semibold" style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} >
            Choose a plan that's right for you..
        </p>
        <p className="register__slide__desc font-semibold" style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} >
            Downgrade or upgrade at any time
        </p>
        <div className="package__boxes">
            <div className="package__boxes__fill"></div>
            <div className="package__boxes__items"> 
                {plans.map((element, i) => <div key={shortid.generate()} style={element.id===step? {background:"red"}:null } className="package__boxes__item" onClick={() => setState(i)}><span>{element.name}</span></div>) }
            </div>
        </div>
        <div className="package__item font-semibold"  style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>
            <div className="package__first__item"><span>Monthly price after free month ends</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null} >$7.99</p>
                <p className="package__items__standart"  style={step===1? {color:"red"} : null}>$10.99</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>$13.99</p>
            </div>
        </div>
        <div className="package__item"  >
            <div className="package__first__item text-gray-300" ><span>HD available</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>No</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>Yes</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <div className="package__item font-semibold" style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>
            <div className="package__first__item"><span>Ultra HD available</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>No</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>No</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <div className="package__item">
            <div className="package__first__item text-gray-300"><span>Screens you can watch on at the same time</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>1</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>2</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>4</p>
            </div>
        </div>
        <div className="package__item font-semibold"  style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>
            <div className="package__first__item"><span>Watch on your laptop, TV, phone and tablet</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>Yes</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>Yes</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <div className="package__item" >
            <div className="package__first__item text-gray-300"><span>Unlimited movies and TV shoes</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>Yes</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>Yes</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <div className="package__item font-semibold"  style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>
            <div className="package__first__item"><span>Cancel anytime</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>Yes</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>Yes</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <div className="package__item" >
            <div className="package__first__item text-gray-300" ><span>First month free</span></div>
            <div className="package__items" >
                <p className="package__items__basic" style={step===0? {color:"red"} : null}>Yes</p>
                <p className="package__items__standart" style={step===1? {color:"red"} : null}>Yes</p>
                <p className="package__items__premium" style={step===2? {color:"red"} : null}>Yes</p>
            </div>
        </div>
        <button className="register__slide__btn register__slide__continue" onClick={onClick}>CONTINUE</button>
    </div>
    </div>
    )
}
