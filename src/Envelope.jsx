import './Envelope.css'
import myHeart from "./assets/heart-cartoon-style.png"

function Envelope({ onClick }) {
  return (
    <div className="envelope-container">
      <div className="envelope">
        <div className="envelope-bottom"></div>
        <div className="flap"></div>
        <img src={myHeart} className="heart"/>
      </div>
    </div>
  )
}

export default Envelope

