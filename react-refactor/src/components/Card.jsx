    import { useState } from "react";
import themeConfig from "../config/themeConfig.js"

    export default function Card({data}) {   
        const {value, theme,averages } = data
        const { cardClass, color, icon } = themeConfig[theme]
        const [beating, setBeating] = useState(false)

        const now = new Date();
        const time = now.toLocaleTimeString('en-US',{hour:'2-digit', minute:'2-digit'})

        const audio = new Audio('./assets/heart_beat.mp3')
        audio.play()
       
    return(
        <div className={`card ${cardClass}`}>
    <div className="black-part">
        <div className="header">
        <div className={`HeartRate ${color}`}>Heart rate</div>
        <div className={`icon-heart ${beating ? "beat": ""}`}><img src={icon} alt="" onClick={() => setBeating(true)} /></div>
        </div>
        <div className="hero">
        <div className="date">Today {time}</div>
        <div className="actual-main">
            <div className="value">{value}</div>
            <div className="bpm ext">BPM</div>
        </div>
        </div>
    </div>
    <div className="line"></div>
    <div className="grey-part">
        <div className="average">Average</div>
        <div className="freq">
        <div>Weekly</div>
        <div>Monthly</div>
        </div>
        <div className="vals">
        <div className="first">
            <div className="num">{averages.weekly}</div>
            <div className="bpm">BPM</div>
        </div>
        <div className="second">
            <div className="num">{averages.monthly}</div>
            <div className="bpm">BPM</div>
        </div>
        </div>
    </div>
    </div>
    )
    }