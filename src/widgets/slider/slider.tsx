import "./slider.css"
import photo0 from "./../../assets/photo0.png"
import photo1 from "./../../assets/photo1.png"
import photo2 from "./../../assets/photo2.png"
import rightarrow from "./../../assets/rightarrow.svg"
import leftarrow from "./../../assets/leftarrow.svg"
import {useState} from "react";
import {Circle} from "../../shared/circle/circle";

export function Slider() {
    const [current, setCurrent] = useState(0)
    const sliderGallery = [photo0, photo1, photo2]
    const circlesArray: any = sliderGallery.map((photo, index) => {if (current === index){return(<Circle status="active"/>)} else{return(<Circle status="notactive"/>)}})
    if (circlesArray){console.log(circlesArray.length)}
    function increment() {
        if (current === sliderGallery.length-1) {
            setCurrent(0)}
        else {
            setCurrent(current+1)
            }
        }

    function decrement() {
        if (current === 0) {
            setCurrent(sliderGallery.length-1)}
        else {
            setCurrent(current-1)
        }
    }

    return(
        <div className="slider">
            <img className="leftarrow" onClick={decrement} src={leftarrow} alt=""/>
            <img className="sliderPic" src={sliderGallery[current]} alt=""/>
            <div className="slider__circles">{circlesArray}</div>
            <img className="rightarrow" onClick={increment}  src={rightarrow} alt=""/>
        </div>
    )
}