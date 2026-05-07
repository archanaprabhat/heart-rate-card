import redIcon from '../assets/red-heart.svg'
import greenIcon from '../assets/green-heart.svg'


export default function Card({data}) {   
    const cardClass = data.theme === 'red'? 'red-card' :'green-card'      
    const iconSrc = data.theme === 'red'? redIcon : greenIcon     
    const color = data.theme === 'red'? 'red' : 'green'  
  return(
    <>
    <div className={`card ${cardClass}`}>
  <div className="black-part">
    <div className="header">
      <div className={`HeartRate ${color}`}>Heart rate</div>
      <div className="icon-heart"><img src={`${iconSrc}`} alt="" /></div>
    </div>
    <div className="hero">
      <div className="date">Today 09:47 AM</div>
      <div className="actual-main">
        <div className="value">{data.value}</div>
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
        <div className="num">{data.averages.weekly}</div>
        <div className="bpm">BPM</div>
      </div>
      <div className="second">
        <div className="num">{data.averages.monthly}</div>
        <div className="bpm">BPM</div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}