import './Envelope.css'
import myHeart from "./assets/heart-cartoon-style.png"

function Envelope({ onClick }) {
  const handleEnvelopeClick = () => {
    
  }

  return (
    <div className="envelope-container" onClick={handleEnvelopeClick}>
      <div className="envelope">
        <div className="envelope-bottom"></div>
        <div className="flap"></div>
        <img src={myHeart} className="heart"/>
      </div>
    </div>
  )
}

export default Envelope

